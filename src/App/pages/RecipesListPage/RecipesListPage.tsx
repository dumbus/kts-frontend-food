import { useEffect, useState } from 'react';

import Loader from 'components/Loader';

import FoodService from 'services/FoodService';
import { getTestRecipes } from 'utils/getTestRecipes';
import { IRecipeListItem } from 'utils/types';

import Filters from './components/Filters';
import Header from './components/Header';
import Paginator from './components/Paginator';
import RecipesList from './components/RecipesList';
import Subtitle from './components/Subtitle';

import styles from './RecipesListPage.module.scss';

const RecipesListPage = () => {
  const [recipesList, setRecipesList] = useState<IRecipeListItem[]>([]);
  const [isLoading, setLoading] = useState(true);

  const foodService = new FoodService();

  // ========================= Development with mock data =========================

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    const rawRecipes = getTestRecipes();
    const recipesData = foodService._transformRecipeListData(rawRecipes);

    setRecipesList(recipesData);
    setLoading(false);
  };

  // ========================= Get real data from API =========================

  // useEffect(() => {
  //   onRequest();
  // }, []);

  // const onRequest = () => {
  //   foodService.getRecipes().then(onRecipesLoaded).catch(onError);
  // };

  // const onRecipesLoaded = (recipesList: IRecipeListItem[]) => {
  //   setRecipesList(recipesList);
  //   setLoading(false);
  // };

  // const onError = (error: Error) => {
  //   // eslint-disable-next-line no-console
  //   console.log(`Some error occured: ${error}`);
  // };

  return (
    <div className={`container ${styles['recipes-list']}`}>
      {!isLoading ? (
        <>
          <Header />
          <Subtitle />
          <Filters />

          <RecipesList recipesList={recipesList} />
          <Paginator page={1} pages={9} onPageSwitch={() => {}} />
        </>
      ) : (
        <Loader className={styles['recipes-list__loader']} />
      )}
    </div>
  );
};

export default RecipesListPage;
