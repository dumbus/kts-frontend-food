import axios from 'axios';

import { getClosestFraction } from 'utils/getClosestFraction';
import { IRecipeListItem, ISingleRecipe, IDirection } from 'utils/types';

type RawData = {
  number: number;
  offset: number;
  totalResults: number;
  results: RawRecipeData[];
};

// TODO: fix nutrition (now it is weightPerServing, not nutrition)
type RawRecipeData = {
  id: number;
  title: string;
  image: string;
  cookingMinutes: number;
  nutrition: INutrition;
};

interface INutrition {
  weightPerServing: {
    amount: number;
    unit: string;
  };
  ingredients: IIngredient[];
}

interface IIngredient {
  name: string;
  amount: number;
  unit: string;
}

interface RawSingleRecipeData {
  title: string;
  image: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  servings: number;
  summary: string;
  extendedIngredients: IIngredient[];
  analyzedInstructions: Array<{
    steps: Array<{
      number: number;
      step: string;
      equipment: Array<{ name: string }>;
    }>;
  }>;
}

class FoodService {
  _apiBaseUrl = 'https://api.spoonacular.com/recipes';
  _apiKey = '727688aee1234493b060d3fad825adb8';

  getResource = async (url: string): Promise<RawData | RawSingleRecipeData> => {
    const response = await axios({
      method: 'get',
      url,
    });

    if (response.status !== 200) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return response.data;
  };

  getRecipes = async (): Promise<IRecipeListItem[]> => {
    const requestUrl = `${this._apiBaseUrl}/complexSearch?addRecipeNutrition=true&instructionsRequired=true&number=9&apiKey=${this._apiKey}`;

    const rawData = (await this.getResource(requestUrl)) as RawData;
    const rawRecipesData = rawData.results;
    const recipesData = this._transformRecipeListData(rawRecipesData);

    return recipesData;
  };

  getRecipeById = async (id: number): Promise<ISingleRecipe> => {
    const requestUrl = `${this._apiBaseUrl}/${id}/information?apiKey=${this._apiKey}`;

    const rawData = (await this.getResource(requestUrl)) as RawSingleRecipeData;
    const recipeData = this._transformSingleRecipeData(rawData);

    return recipeData;
  };

  _transformRecipeListData = (rawRecipesData: RawRecipeData[]): IRecipeListItem[] => {
    return rawRecipesData.map((rawRecipe) => {
      return {
        id: rawRecipe.id,
        title: rawRecipe.title,
        imageSrc: rawRecipe.image,
        cookingMinutes: rawRecipe.cookingMinutes,
        nutrition: rawRecipe.nutrition.weightPerServing.amount,
        ingredients: rawRecipe.nutrition.ingredients.map((ingredient) => ingredient.name),
      };
    });
  };

  _transformSingleRecipeData = (rawRecipeData: RawSingleRecipeData): ISingleRecipe => {
    const recipeData: ISingleRecipe = {
      title: rawRecipeData.title,
      image: rawRecipeData.image,
      preparationMinutes: rawRecipeData.preparationMinutes,
      cookingMinutes: rawRecipeData.cookingMinutes,
      totalMinutes: rawRecipeData.preparationMinutes + rawRecipeData.cookingMinutes,
      aggregateLikes: rawRecipeData.aggregateLikes,
      servings: rawRecipeData.servings,
      summary: rawRecipeData.summary,
      ingredients: [],
      equipment: [],
      directions: [],
    };

    const equipmentList: string[] = [];
    const directions: IDirection[] = [];
    const ingredients: string[] = [];

    rawRecipeData.extendedIngredients.forEach(({ name, amount, unit }: IIngredient) => {
      const fractionedAmount = getClosestFraction(amount);
      const currentIngredient = `${fractionedAmount} ${unit} ${name}`;

      ingredients.push(currentIngredient);
    });

    rawRecipeData.analyzedInstructions[0].steps.forEach(({ number, step, equipment }) => {
      const currentInstruction = {
        number,
        step,
      };

      directions.push(currentInstruction);

      equipment.forEach((equipmentItem) => {
        const currentEquipment = equipmentItem.name;

        if (!equipmentList.includes(currentEquipment)) {
          equipmentList.push(currentEquipment);
        }
      });
    });

    recipeData.ingredients = ingredients;
    recipeData.equipment = equipmentList;
    recipeData.directions = directions;

    return recipeData;
  };
}

export default FoodService;
