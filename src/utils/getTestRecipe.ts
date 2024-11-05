import { IRawSingleRecipeData } from './types';

export const getTestRecipe = () => {
  const testRecipe: IRawSingleRecipeData = {
    id: '10',
    title: 'Classic Lasagna',
    image: 'https://img.spoonacular.com/recipes/10-312x231.jpg',
    preparationMinutes: 20,
    cookingMinutes: 60,
    aggregateLikes: 1234,
    servings: 6,
    summary:
      'A classic lasagna recipe made with layers of pasta, rich meat sauce, and creamy béchamel, topped with melted cheese.',
    extendedIngredients: [
      { name: 'lasagna noodles', amount: 12, unit: 'pcs' },
      { name: 'ground beef', amount: 500, unit: 'g' },
      { name: 'tomato sauce', amount: 400, unit: 'ml' },
      { name: 'ricotta cheese', amount: 250, unit: 'g' },
      { name: 'mozzarella cheese', amount: 200, unit: 'g' },
      { name: 'parmesan cheese', amount: 50, unit: 'g' },
      { name: 'onion', amount: 1, unit: 'pcs' },
      { name: 'garlic', amount: 2, unit: 'cloves' },
      { name: 'olive oil', amount: 2, unit: 'tbsp' },
      { name: 'basil', amount: 1, unit: 'tbsp' },
    ],
    analyzedInstructions: [
      {
        steps: [
          {
            number: 1,
            step: 'Preheat the oven to 180°C (350°F).',
            equipment: [{ name: 'oven' }],
          },
          {
            number: 2,
            step: 'Cook the lasagna noodles according to package instructions, then drain and set aside.',
            equipment: [{ name: 'pot' }],
          },
          {
            number: 3,
            step: 'In a large pan, heat olive oil and sauté the onion and garlic until soft.',
            equipment: [{ name: 'pan' }, { name: 'stove' }],
          },
          {
            number: 4,
            step: 'Add the ground beef to the pan and cook until browned.',
            equipment: [{ name: 'pan' }],
          },
          {
            number: 5,
            step: 'Pour in the tomato sauce and add basil. Simmer for 15 minutes.',
            equipment: [{ name: 'pan' }],
          },
          {
            number: 6,
            step: 'In a baking dish, layer noodles, meat sauce, ricotta, and mozzarella. Repeat layers, topping with parmesan cheese.',
            equipment: [{ name: 'baking dish' }],
          },
          {
            number: 7,
            step: 'Bake in the preheated oven for 45 minutes or until the top is golden brown.',
            equipment: [{ name: 'oven' }],
          },
        ],
      },
    ],
  };

  return testRecipe;
};
