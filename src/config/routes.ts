export const ROUTES = {
  recipes: () => '/recipes',
  recipesDetail: (id: number) => `/recipes/${id}`,
  randomRecipe: (timestamp: number) => `/recipes/random/${timestamp}`,
  favorites: () => `/recipes/favorites`,
};
