export interface IRecipeListData {
  list: IRecipeListItem[];
  totalResults: number;
}

export interface IRecipeListItem {
  id: number;
  title: string;
  imageSrc: string;
  readyInMinutes: number;
  ingredients: string[];
  nutrition: number;
  dishTypes: string[];
}

export interface IFavoriteItem {
  id: number;
  title: string;
  imageSrc: string;
  readyInMinutes: number;
  ingredients: string[];
}

export interface ISingleRecipe {
  title: string;
  image: string;
  preparationMinutes: number;
  cookingMinutes: number;
  totalMinutes: number;
  aggregateLikes: number;
  servings: number;
  summary: string;
  ingredients: string[];
  equipment: string[];
  directions: IDirection[];
}

export interface IDirection {
  number: number;
  step: string;
}

export interface IIngredient {
  name: string;
  amount: number;
  unit: string;
}

export interface INutrition {
  nutrients: INutrient[];
  ingredients: IIngredient[];
}

export interface INutrient {
  name: string;
  amount: number;
}

export interface ILocalStore {
  destroy(): void;
}

export interface IMultiDropdownOption {
  key: string;
  value: string;
}

export interface IQueryParams {
  name?: string;
  type?: IMultiDropdownOption[];
  page?: number;
}

export type PageType = 'single' | 'random';

export type CurrentPageName = 'recipes' | 'favorites' | 'random';
