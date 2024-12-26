import { RECIPES_ON_PAGE } from './constants';

export const getOffset = (page: number) => {
  return (page - 1) * RECIPES_ON_PAGE;
};
