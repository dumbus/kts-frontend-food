export interface IRecipeListItem {
  id: number;
  title: string;
  imageSrc: string;
  cookingMinutes: number;
  ingredients: string[];
  nutrition: number;
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
