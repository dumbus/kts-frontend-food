import axios from 'axios';

import { getClosestFraction } from 'utils/getClosestFraction';
import {
  IRecipeListItem,
  ISingleRecipe,
  IRawRecipeData,
  IRawSingleRecipeData,
  IIngredient,
  IDirection,
} from 'utils/types';

type RawData = {
  number: number;
  offset: number;
  totalResults: number;
  results: IRawRecipeData[];
};

class FoodService {
  _apiBaseUrl = 'https://api.spoonacular.com/recipes';
  _apiKey = '727688aee1234493b060d3fad825adb8';

  getResource = async (url: string): Promise<RawData | IRawSingleRecipeData> => {
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

  getRecipeById = async (id = '1'): Promise<ISingleRecipe> => {
    const requestUrl = `${this._apiBaseUrl}/${id}/information?apiKey=${this._apiKey}`;

    const rawData = (await this.getResource(requestUrl)) as IRawSingleRecipeData;
    const recipeData = this._transformSingleRecipeData(rawData);

    return recipeData;
  };

  _transformRecipeListData = (rawRecipesData: IRawRecipeData[]): IRecipeListItem[] => {
    return rawRecipesData.map((rawRecipe) => {
      const calories = rawRecipe.nutrition.nutrients?.find((nutrient) => nutrient.name === 'Calories')?.amount || 0;

      return {
        id: rawRecipe.id,
        title: rawRecipe.title || 'No information about Title',
        imageSrc: rawRecipe.image,
        cookingMinutes: rawRecipe.cookingMinutes || 0,
        nutrition: calories,
        ingredients: rawRecipe.nutrition.ingredients.map((ingredient) => ingredient.name),
      };
    });
  };

  _transformSingleRecipeData = (rawRecipeData: IRawSingleRecipeData): ISingleRecipe => {
    const recipeData: ISingleRecipe = {
      title: rawRecipeData.title || 'No information about Title',
      image: rawRecipeData.image,
      preparationMinutes: rawRecipeData.preparationMinutes || 0,
      cookingMinutes: rawRecipeData.cookingMinutes || 0,
      totalMinutes: rawRecipeData.preparationMinutes + rawRecipeData.cookingMinutes,
      aggregateLikes: rawRecipeData.aggregateLikes || 0,
      servings: rawRecipeData.servings || 0,
      summary: rawRecipeData.summary || 'No information about Summary',
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
