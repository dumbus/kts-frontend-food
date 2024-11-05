import { useEffect, useState } from 'react';

import Loader from 'components/Loader';
import FoodService from 'services/FoodService';

import { getTestRecipe } from 'utils/getTestRecipe';
import { ISingleRecipe } from 'utils/types';

import Characteristic from './components/Characteristic';
import Directions from './components/Directions';
import Divider from './components/Divider';
import Header from './components/Header';
import Summary from './components/Summary';
import Supplies from './components/Supplies';

import styles from './SingleRecipePage.module.scss';

const SingleRecipePage = () => {
  const [recipeData, setRecipeData] = useState<ISingleRecipe | null>(null);
  const [isLoading, setLoading] = useState(true);

  // ========================= Development with mock data =========================

  const foodService = new FoodService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    const rawRecipe = getTestRecipe();
    const recipeData = foodService._transformSingleRecipeData(rawRecipe);

    setRecipeData(recipeData);
    setLoading(false);
  };

  // ========================= Get real data from API =========================

  // const foodService = new FoodService();
  // const { id } = useParams();

  // useEffect(() => {
  //   onRequest();
  // }, []);

  // const onRequest = () => {
  //   foodService.getRecipeById(id).then(onRecipeLoaded).catch(onError);
  // };

  // const onRecipeLoaded = (recipesData: ISingleRecipe) => {
  //   setRecipeData(recipesData);
  //   setLoading(false);
  // };

  // const onError = (error: Error) => {
  //   // eslint-disable-next-line no-console
  //   console.log(`Some error occured: ${error}`);
  // };

  return (
    <div className={`container ${styles['single-recipe']}`}>
      {!isLoading && recipeData !== null ? (
        <>
          <Header title={recipeData.title} />

          <Characteristic
            title={recipeData.title}
            image={recipeData.image}
            preparationMinutes={recipeData.preparationMinutes}
            cookingMinutes={recipeData.cookingMinutes}
            totalMinutes={recipeData.totalMinutes}
            aggregateLikes={recipeData.aggregateLikes}
            servings={recipeData.servings}
          />

          <Summary summary={recipeData.summary} />

          <div className={styles['single-recipe__supplies']}>
            <Supplies type="ingredients" items={recipeData.ingredients} />
            <Divider className={styles['single-recipe__divider']} />
            <Supplies type="equipment" items={recipeData.equipment} />
          </div>

          <Directions directions={recipeData.directions} />
        </>
      ) : (
        <Loader className={styles['single-recipe__loader']} />
      )}
    </div>
  );
};

export default SingleRecipePage;
