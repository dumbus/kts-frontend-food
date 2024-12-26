import { RECIPES_ON_PAGE } from './constants';

export const getPages = (totalResults: number) => {
  return Math.ceil(totalResults / RECIPES_ON_PAGE);
};
