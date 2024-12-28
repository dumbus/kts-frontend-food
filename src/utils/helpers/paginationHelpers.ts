import { RECIPES_ON_PAGE } from '../constants';

export const getOffset = (page: number) => {
  return (page - 1) * RECIPES_ON_PAGE;
};

export const getPages = (totalResults: number) => {
  return Math.ceil(totalResults / RECIPES_ON_PAGE);
};
