import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';

import useLocalStore from 'hooks/useLocalStore';
import SingleRecipeStore from 'store/SingleRecipeStore';
import { Meta } from 'utils/meta';

import Characteristic from './components/Characteristic';
import Directions from './components/Directions';
import Divider from './components/Divider';
import Header from './components/Header';
import Summary from './components/Summary';
import Supplies from './components/Supplies';

import styles from './SingleRecipePage.module.scss';

const SingleRecipePage = () => {
  const singleRecipeStore = useLocalStore(() => new SingleRecipeStore());

  const { id = '' } = useParams();

  useEffect(() => {
    singleRecipeStore.getRecipesListData(id);
  }, [singleRecipeStore, id]);

  const rootClass = classNames('container', styles['single-recipe']);

  return (
    <div className={rootClass}>
      {singleRecipeStore.meta === Meta.loading && <Loader className={styles['single-recipe__loader']} />}

      {/* Временное решение, пока нет компонента Error: */}
      {singleRecipeStore.meta === Meta.error && (
        <>Произошла ошибка: {singleRecipeStore.error?.message || 'Неизвестная ошибка'}</>
      )}

      {singleRecipeStore.meta === Meta.success && singleRecipeStore.recipe !== null && (
        <>
          <Header title={singleRecipeStore.recipe.title} />

          <Characteristic
            title={singleRecipeStore.recipe.title}
            image={singleRecipeStore.recipe.image}
            preparationMinutes={singleRecipeStore.recipe.preparationMinutes}
            cookingMinutes={singleRecipeStore.recipe.cookingMinutes}
            totalMinutes={singleRecipeStore.recipe.totalMinutes}
            aggregateLikes={singleRecipeStore.recipe.aggregateLikes}
            servings={singleRecipeStore.recipe.servings}
          />

          <Summary summary={singleRecipeStore.recipe.summary} />

          <div className={styles['single-recipe__supplies']}>
            <Supplies type="ingredients" items={singleRecipeStore.recipe.ingredients} />
            <Divider className={styles['single-recipe__divider']} />
            <Supplies type="equipment" items={singleRecipeStore.recipe.equipment} />
          </div>

          <Directions directions={singleRecipeStore.recipe.directions} />
        </>
      )}
    </div>
  );
};

export default observer(SingleRecipePage);
