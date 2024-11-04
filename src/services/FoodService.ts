import axios from 'axios';

import { IRecipeListItem } from 'utils/types';

type RawData = {
  number: number;
  offset: number;
  totalResults: number;
  results: RawRecipeData[];
};

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
}

class FoodService {
  _apiBaseUrl = 'https://api.spoonacular.com/recipes';
  _apiKey = '727688aee1234493b060d3fad825adb8';

  getResource = async (url: string): Promise<RawData> => {
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
    const requestUrl = `${this._apiBaseUrl}/complexSearch?addRecipeNutrition=true&number=9&apiKey=${this._apiKey}`;
    const rawData = await this.getResource(requestUrl);
    const rawRecipesData: RawRecipeData[] = rawData.results;
    const recipesData = this._transformRecipeListData(rawRecipesData);

    return recipesData;
  };

  getRecipeById = async (id: number) => {
    const requestUrl = `${this._apiBaseUrl}/${id}/information?apiKey=${this._apiKey}`;
    const data = await this.getResource(requestUrl);

    return data;
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
}

export default FoodService;
