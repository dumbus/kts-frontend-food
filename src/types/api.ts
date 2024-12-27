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
  cookingMinutes: number;
  nutrition: INutrition;
}

export interface IRawFavoriteData {
  id: number;
  title: string;
  image: string;
  cookingMinutes: number;
  extendedIngredients: IIngredient[];
  dishTypes: string[];
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
