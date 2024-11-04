import { IRecipeListItem } from './types';

export const getTestRecipes = () => {
  const testRecipes: IRecipeListItem[] = [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      imageSrc: 'https://img.spoonacular.com/recipes/715446-312x231.jpg',
      cookingMinutes: 20,
      ingredients: ['spaghetti', 'bacon', 'eggs', 'Parmesan cheese', 'black pepper'],
      nutrition: 600,
    },
    {
      id: 2,
      title: 'Chicken Curry',
      imageSrc: 'https://img.spoonacular.com/recipes/715446-312x231.jpg',
      cookingMinutes: 40,
      ingredients: ['chicken', 'curry powder', 'coconut milk', 'rice', 'vegetables'],
      nutrition: 700,
    },
    {
      id: 3,
      title: 'Beef Tacos',
      imageSrc: 'https://img.spoonacular.com/recipes/715446-312x231.jpg',
      cookingMinutes: 30,
      ingredients: ['ground beef', 'taco shells', 'lettuce', 'tomato', 'cheese'],
      nutrition: 500,
    },
    {
      id: 4,
      title: 'Vegetable Stir Fry',
      imageSrc: 'https://img.spoonacular.com/recipes/715446-312x231.jpg',
      cookingMinutes: 25,
      ingredients: ['mixed vegetables', 'soy sauce', 'ginger', 'garlic', 'rice'],
      nutrition: 350,
    },
    {
      id: 5,
      title: 'Margherita Pizza',
      imageSrc: 'https://img.spoonacular.com/recipes/715446-312x231.jpg',
      cookingMinutes: 15,
      ingredients: ['pizza dough', 'tomato sauce', 'mozzarella cheese', 'basil'],
      nutrition: 400,
    },
    {
      id: 6,
      title: 'Caesar Salad',
      imageSrc: 'https://img.spoonacular.com/recipes/715446-312x231.jpg',
      cookingMinutes: 10,
      ingredients: ['romaine lettuce', 'Caesar dressing', 'croutons', 'Parmesan cheese'],
      nutrition: 250,
    },
    {
      id: 7,
      title: 'Grilled Salmon',
      imageSrc: 'https://img.spoonacular.com/recipes/715446-312x231.jpg',
      cookingMinutes: 20,
      ingredients: ['salmon fillet', 'olive oil', 'lemon', 'garlic', 'herbs'],
      nutrition: 550,
    },
    {
      id: 8,
      title: 'Chocolate Cake',
      imageSrc: 'https://img.spoonacular.com/recipes/715446-312x231.jpg',
      cookingMinutes: 60,
      ingredients: ['flour', 'cocoa powder', 'sugar', 'eggs', 'butter'],
      nutrition: 450,
    },
    {
      id: 9,
      title: 'Pancakes',
      imageSrc: 'https://img.spoonacular.com/recipes/715446-312x231.jpg',
      cookingMinutes: 15,
      ingredients: ['flour', 'milk', 'eggs', 'baking powder', 'syrup'],
      nutrition: 300,
    },
  ];

  return testRecipes;
};
