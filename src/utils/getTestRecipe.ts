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
      'Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you\'re following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185">Red Lentil and Chicken Soup</a>, <a href="https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971">Red Lentil and Chicken Soup</a>, and <a href="https://spoonacular.com/recipes/red-lentil-soup-34121">Red-Lentil Soup</a>.',
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
