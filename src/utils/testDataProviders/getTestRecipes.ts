import { IRawRecipeData, IPaginatedRawRecipesData } from 'types/api';

export const getTestRecipes = () => {
  const testRecipes: IRawRecipeData[] = [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      image: '',
      readyInMinutes: 20,
      dishTypes: ['main course', 'main course', 'main course', 'main course', 'main course', 'main course'],
      nutrition: {
        nutrients: [
          { name: 'Calories', amount: 477.24 },
          { name: 'Fat', amount: 20.34 },
          { name: 'Protein', amount: 17.2 },
          { name: 'Carbohydrates', amount: 55.4 },
        ],
        ingredients: [
          { name: 'spaghetti', amount: 100, unit: 'g' },
          { name: 'bacon', amount: 50, unit: 'g' },
          { name: 'parmesan cheese', amount: 30, unit: 'g' },
          { name: 'egg yolks', amount: 2, unit: 'pcs' },
        ],
      },
    },
    {
      id: 2,
      title: 'Chicken Caesar Salad',
      image: '',
      readyInMinutes: 15,
      dishTypes: ['salad', 'main course'],

      nutrition: {
        nutrients: [
          { name: 'Calories', amount: 350 },
          { name: 'Fat', amount: 15 },
          { name: 'Protein', amount: 30 },
          { name: 'Carbohydrates', amount: 20 },
        ],
        ingredients: [
          { name: 'chicken breast', amount: 200, unit: 'g' },
          { name: 'romaine lettuce', amount: 100, unit: 'g' },
          { name: 'croutons', amount: 50, unit: 'g' },
          { name: 'Caesar dressing', amount: 30, unit: 'ml' },
        ],
      },
    },
    {
      id: 3,
      title: 'Vegetable Stir Fry',
      image: '',
      readyInMinutes: 10,
      dishTypes: ['side dish'],
      nutrition: {
        nutrients: [
          { name: 'Calories', amount: 250 },
          { name: 'Fat', amount: 5 },
          { name: 'Protein', amount: 8 },
          { name: 'Carbohydrates', amount: 45 },
        ],
        ingredients: [
          { name: 'broccoli', amount: 100, unit: 'g' },
          { name: 'carrot', amount: 50, unit: 'g' },
          { name: 'red bell pepper', amount: 50, unit: 'g' },
          { name: 'soy sauce', amount: 20, unit: 'ml' },
        ],
      },
    },
    {
      id: 4,
      title: 'Beef Tacos',
      image: '',
      readyInMinutes: 25,
      dishTypes: ['main course', 'fingerfood'],
      nutrition: {
        nutrients: [
          { name: 'Calories', amount: 390 },
          { name: 'Fat', amount: 18 },
          { name: 'Protein', amount: 25 },
          { name: 'Carbohydrates', amount: 35 },
        ],
        ingredients: [
          { name: 'ground beef', amount: 200, unit: 'g' },
          { name: 'taco seasoning', amount: 1, unit: 'tbsp' },
          { name: 'tortillas', amount: 3, unit: 'pcs' },
          { name: 'cheddar cheese', amount: 50, unit: 'g' },
        ],
      },
    },
    {
      id: 5,
      title: 'Margherita Pizza',
      image: '',
      readyInMinutes: 15,
      dishTypes: ['main course', 'fingerfood'],
      nutrition: {
        nutrients: [
          { name: 'Calories', amount: 250 },
          { name: 'Fat', amount: 10 },
          { name: 'Protein', amount: 12 },
          { name: 'Carbohydrates', amount: 30 },
        ],
        ingredients: [
          { name: 'pizza dough', amount: 200, unit: 'g' },
          { name: 'tomato sauce', amount: 100, unit: 'ml' },
          { name: 'mozzarella cheese', amount: 100, unit: 'g' },
          { name: 'fresh basil', amount: 5, unit: 'g' },
        ],
      },
    },
    {
      id: 6,
      title: 'Chocolate Chip Cookies',
      image: '',
      readyInMinutes: 10,
      dishTypes: ['main course', 'fingerfood'],
      nutrition: {
        nutrients: [
          { name: 'Calories', amount: 150 },
          { name: 'Fat', amount: 8 },
          { name: 'Protein', amount: 2 },
          { name: 'Carbohydrates', amount: 20 },
        ],
        ingredients: [
          { name: 'all-purpose flour', amount: 120, unit: 'g' },
          { name: 'sugar', amount: 50, unit: 'g' },
          { name: 'butter', amount: 60, unit: 'g' },
          { name: 'chocolate chips', amount: 100, unit: 'g' },
        ],
      },
    },
    {
      id: 7,
      title: 'Greek Salad',
      image: '',
      readyInMinutes: 10,
      dishTypes: ['main course', 'fingerfood'],
      nutrition: {
        nutrients: [
          { name: 'Calories', amount: 120 },
          { name: 'Fat', amount: 9 },
          { name: 'Protein', amount: 3 },
          { name: 'Carbohydrates', amount: 7 },
        ],
        ingredients: [
          { name: 'cucumber', amount: 100, unit: 'g' },
          { name: 'tomato', amount: 80, unit: 'g' },
          { name: 'feta cheese', amount: 50, unit: 'g' },
          { name: 'olives', amount: 30, unit: 'g' },
        ],
      },
    },
    {
      id: 8,
      title: 'Pancakes',
      image: '',
      readyInMinutes: 15,
      dishTypes: ['main course', 'fingerfood'],
      nutrition: {
        nutrients: [
          { name: 'Calories', amount: 200 },
          { name: 'Fat', amount: 6 },
          { name: 'Protein', amount: 5 },
          { name: 'Carbohydrates', amount: 30 },
        ],
        ingredients: [
          { name: 'flour', amount: 100, unit: 'g' },
          { name: 'milk', amount: 200, unit: 'ml' },
          { name: 'egg', amount: 1, unit: 'pcs' },
          { name: 'butter', amount: 10, unit: 'g' },
        ],
      },
    },
    {
      id: 9,
      title: 'Tomato Basil Soup',
      image: '',
      readyInMinutes: 30,
      dishTypes: ['main course', 'fingerfood'],
      nutrition: {
        nutrients: [
          { name: 'Calories', amount: 150 },
          { name: 'Fat', amount: 5 },
          { name: 'Protein', amount: 3 },
          { name: 'Carbohydrates', amount: 22 },
        ],
        ingredients: [
          { name: 'tomatoes', amount: 400, unit: 'g' },
          { name: 'basil', amount: 10, unit: 'g' },
          { name: 'onion', amount: 50, unit: 'g' },
          { name: 'garlic', amount: 5, unit: 'g' },
        ],
      },
    },
    {
      id: 10,
      title: 'Pasta Primavera',
      image: '',
      readyInMinutes: 25,
      dishTypes: ['main course', 'fingerfood'],
      nutrition: {
        nutrients: [
          { name: 'Calories', amount: 330 },
          { name: 'Fat', amount: 12 },
          { name: 'Protein', amount: 10 },
          { name: 'Carbohydrates', amount: 45 },
        ],
        ingredients: [
          { name: 'penne pasta', amount: 150, unit: 'g' },
          { name: 'cherry tomatoes', amount: 100, unit: 'g' },
          { name: 'bell pepper', amount: 50, unit: 'g' },
          { name: 'zucchini', amount: 50, unit: 'g' },
          { name: 'parmesan cheese', amount: 30, unit: 'g' },
        ],
      },
    },
    {
      id: 11,
      title: 'Fish Tacos',
      image: '',
      readyInMinutes: 20,
      dishTypes: ['main course', 'fingerfood'],
      nutrition: {
        nutrients: [
          { name: 'Calories', amount: 280 },
          { name: 'Fat', amount: 12 },
          { name: 'Protein', amount: 18 },
          { name: 'Carbohydrates', amount: 25 },
        ],
        ingredients: [
          { name: 'white fish fillets', amount: 150, unit: 'g' },
          { name: 'corn tortillas', amount: 3, unit: 'pcs' },
          { name: 'avocado', amount: 50, unit: 'g' },
          { name: 'lime', amount: 1, unit: 'pcs' },
          { name: 'cabbage', amount: 50, unit: 'g' },
        ],
      },
    },
    {
      id: 12,
      title: 'Chicken Fried Rice',
      dishTypes: ['main course', 'fingerfood'],
      image: '',
      readyInMinutes: 20,
      nutrition: {
        nutrients: [
          { name: 'Calories', amount: 400 },
          { name: 'Fat', amount: 15 },
          { name: 'Protein', amount: 25 },
          { name: 'Carbohydrates', amount: 45 },
        ],
        ingredients: [
          { name: 'chicken breast', amount: 150, unit: 'g' },
          { name: 'cooked rice', amount: 200, unit: 'g' },
          { name: 'peas', amount: 50, unit: 'g' },
          { name: 'carrot', amount: 50, unit: 'g' },
          { name: 'soy sauce', amount: 30, unit: 'ml' },
        ],
      },
    },
  ];

  const rawData: IPaginatedRawRecipesData = {
    number: testRecipes.length,
    offset: 0,
    totalResults: testRecipes.length * 10,
    results: testRecipes,
  };

  return rawData;
};
