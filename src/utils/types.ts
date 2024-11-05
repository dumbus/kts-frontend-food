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

export interface IRawRecipeData {
  id: number;
  title: string;
  image: string;
  cookingMinutes: number;
  nutrition: INutrition;
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

export interface IIngredient {
  name: string;
  amount: number;
  unit: string;
}

export interface IDirection {
  number: number;
  step: string;
}

interface INutrition {
  nutrients: INutrient[];
  ingredients: IIngredient[];
}

interface INutrient {
  name: string;
  amount: number;
}
