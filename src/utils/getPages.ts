export const getPages = (totalResults: number) => {
  return Math.ceil(totalResults / 12);
};
