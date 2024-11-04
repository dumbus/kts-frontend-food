import { useEffect, useState } from 'react';

import recipesListBg from 'assets/recipes-list-bg.jpg';
import recipesListTitle from 'assets/recipes-list-title.png';

import Loader from 'components/Loader';
import Text from 'components/Text';
// import FoodService from 'services/FoodService';
import { getTestRecipes } from 'utils/getTestRecipes';

import { IRecipeListItem } from 'utils/types';

import Filters from './components/Filters';
import Paginator from './components/Paginator';
import RecipesList from './components/RecipesList';

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
      {isLoading ? (
        <Loader className={styles['recipes-list__loader']} />
      ) : (
        <>
          <div className={styles['recipes-list__header']}>
            <img className={styles['recipes-list__bg']} src={recipesListBg} alt="recipes-list-bg" />
            <img className={styles['recipes-list__title']} src={recipesListTitle} alt="recipes-list-title" />
          </div>

          <Text className={styles['recipes-list__subtitle']} tag="h2" weight="normal" view="p-20">
            Find the perfect food and <u>drink ideas</u> for every occasion, from <u>weeknight dinners</u> to{' '}
            <u>holiday feasts</u>.
          </Text>

          <Filters />

          <RecipesList recipesList={recipesList} />

          <Paginator page={1} pages={9} onPageSwitch={() => {}} />
        </>
      )}
    </div>
  );
};

export default RecipesListPage;
