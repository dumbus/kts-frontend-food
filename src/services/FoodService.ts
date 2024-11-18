import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { IPaginatedRawRecipesData, IRawRecipeData, IRawSingleRecipeData } from 'types/api';
import { IRecipeListData, IRecipeListItem, ISingleRecipe, IIngredient, IDirection } from 'types/entities';

import { getClosestFraction } from 'utils/getClosestFraction';
import { getOffset } from 'utils/getOffset';

class FoodService {
  private _apiClient: AxiosInstance;

  constructor() {
    this._apiClient = axios.create({
      baseURL: 'https://api.spoonacular.com/recipes',
      params: {
        apiKey: import.meta.env.VITE_API_KEY,
      },
    });
  }

  getResource = async <D>(config: AxiosRequestConfig): Promise<D> => {
    try {
      const response = await this._apiClient({
        ...config,
        method: 'get',
      });

      if (response.status !== 200) {
        throw new Error(`Could not fetch ${config.url}, status: ${response.status}`);
      }

      return response.data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      throw new Error(`Error fetching data from ${config.url}: ${errorMessage}`);
    }
  };

  getRecipes = async (search = '', page = 1, type = ''): Promise<IRecipeListData> => {
    const rawData = await this.getResource<IPaginatedRawRecipesData>({
      url: '/complexSearch',
      params: {
        addRecipeNutrition: true,
        instructionsRequired: true,
        number: 9,
        offset: getOffset(page),
        query: search,
        type: type,
      },
    });
    const paginatedData = this._transfrormPaginatedRecipesData(rawData);

    return paginatedData;
  };

  getRecipeById = async (id: string): Promise<ISingleRecipe> => {
    const rawData = await this.getResource<IRawSingleRecipeData>({
      url: `/${id}/information`,
    });
    const recipeData = this._transformSingleRecipeData(rawData);

    return recipeData;
  };

  _transfrormPaginatedRecipesData = (rawPaginatedData: IPaginatedRawRecipesData): IRecipeListData => {
    const data: IRecipeListData = {
      list: [],
      totalResults: rawPaginatedData.totalResults,
    };
    const rawRecipesData = rawPaginatedData.results;

    data.list = this._transformRecipeListData(rawRecipesData);

    return data;
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
    const ingredients: string[] = rawRecipeData.extendedIngredients.map(({ name, amount, unit }: IIngredient) => {
      const fractionedAmount = getClosestFraction(amount);
      const currentIngredient = `${fractionedAmount} ${unit} ${name}`;

      return currentIngredient;
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
