import { INutrition, IIngredient } from './entities';

export interface IPaginatedRawRecipesData {
  number: number;
  offset: number;
  totalResults: number;
  results: IRawRecipeData[];
}

export interface IRawRecipeData {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  nutrition: INutrition;
  dishTypes: string[];
}

export interface IRawFavoriteData {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  extendedIngredients: IIngredient[];
}

export interface IRawSingleRecipeData {
  id: string;
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
