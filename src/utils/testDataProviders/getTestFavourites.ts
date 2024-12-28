import { IRawFavoriteData } from 'types/api';

let testFavourites: IRawFavoriteData[] = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    image: '',
    readyInMinutes: 20,

    extendedIngredients: [
      { name: 'spaghetti', amount: 100, unit: 'g' },
      { name: 'bacon', amount: 50, unit: 'g' },
      { name: 'parmesan cheese', amount: 30, unit: 'g' },
      { name: 'egg yolks', amount: 2, unit: 'pcs' },
    ],
  },
  {
    id: 2,
    title: 'Chicken Caesar Salad',
    image: '',
    readyInMinutes: 15,

    extendedIngredients: [
      { name: 'chicken breast', amount: 200, unit: 'g' },
      { name: 'romaine lettuce', amount: 100, unit: 'g' },
      { name: 'croutons', amount: 50, unit: 'g' },
      { name: 'Caesar dressing', amount: 30, unit: 'ml' },
    ],
  },
  {
    id: 3,
    title: 'Vegetable Stir Fry',
    image: '',
    readyInMinutes: 10,

    extendedIngredients: [
      { name: 'broccoli', amount: 100, unit: 'g' },
      { name: 'carrot', amount: 50, unit: 'g' },
      { name: 'red bell pepper', amount: 50, unit: 'g' },
      { name: 'soy sauce', amount: 20, unit: 'ml' },
    ],
  },
  {
    id: 4,
    title: 'Beef Tacos',
    image: '',
    readyInMinutes: 25,

    extendedIngredients: [
      { name: 'ground beef', amount: 200, unit: 'g' },
      { name: 'taco seasoning', amount: 1, unit: 'tbsp' },
      { name: 'tortillas', amount: 3, unit: 'pcs' },
      { name: 'cheddar cheese', amount: 50, unit: 'g' },
    ],
  },
];

export const getTestFavourites = () => [...testFavourites];

export const addTestFavourite = (favorite: IRawFavoriteData) => {
  testFavourites.push(favorite);
};

export const removeTestFavourite = (id: number) => {
  testFavourites = testFavourites.filter((item) => item.id !== id);
};

export const updateTestFavourite = (id: number, updatedData: Partial<IRawFavoriteData>) => {
  const index = testFavourites.findIndex((item) => item.id === id);
  if (index !== -1) {
    testFavourites[index] = { ...testFavourites[index], ...updatedData };
  }
};
