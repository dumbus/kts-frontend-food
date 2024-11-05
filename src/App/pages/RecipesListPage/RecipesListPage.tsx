import { useEffect, useState } from 'react';

import Loader from 'components/Loader';

// import FoodService from 'services/FoodService';
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

  // ========================= Development with mock data =========================

  useEffect(() => {
    onRequest();
  }, []);

  useEffect(() => {
    console.log(recipesList);
  }, [recipesList]);

  const onRequest = () => {
    const recipes = getTestRecipes();
    setRecipesList(recipes);
    setLoading(false);
  };

  // ========================= Get real data from API =========================

  // const foodService = new FoodService();

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
