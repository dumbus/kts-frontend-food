import { useEffect, useState } from 'react';

import Loader from 'components/Loader';
import Text from 'components/Text';

import FoodService from 'services/FoodService';

import { IRecipeListItem } from 'utils/types';

const RecipesListPage = () => {
  const [recipesList, setRecipesLIst] = useState<IRecipeListItem[]>([]);
  const [isLoading, setLoading] = useState(true);

  const foodService = new FoodService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    foodService.getRecipes().then(onRecipesLoaded).catch(onError);
  };

  const onRecipesLoaded = (recipesList: IRecipeListItem[]) => {
    setRecipesLIst(recipesList);
    setLoading(false);
  };

  const onError = (error: Error) => {
    // eslint-disable-next-line no-console
    console.log(`Some error occured: ${error}`);
  };

  return (
    <>
      <Loader />
      <Text>RecipesListPage</Text>
    </>
  );
};

export default RecipesListPage;
