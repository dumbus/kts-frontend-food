import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Loader from 'components/Loader';

import useLocalStore from 'hooks/useLocalStore';
import RecipesListStore from 'store/RecipesListStore';
import rootStore from 'store/RootStore';
import { Meta } from 'utils/meta';
import { parseUrlParams } from 'utils/parseUrlParams';

import Filters from './components/Filters';
import Header from './components/Header';
import Paginator from './components/Paginator';
import RecipesList from './components/RecipesList';
import Subtitle from './components/Subtitle';

import styles from './RecipesListPage.module.scss';

const RecipesListPage = () => {
  const recipesListStore = useLocalStore(() => new RecipesListStore());

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const newParams = parseUrlParams(params);

    rootStore.query.setParams(newParams);

    recipesListStore.getRecipesListData();
  }, [location.search, recipesListStore]);

  const rootClass = classNames('container', styles['recipes-list']);

  return (
    <div className={rootClass}>
      {recipesListStore.meta === Meta.loading && <Loader className={styles['recipes-list__loader']} />}

      {/* Временное решение, пока нет компонента Error: */}
      {recipesListStore.meta === Meta.error && (
        <>Произошла ошибка: {recipesListStore.error?.message || 'Неизвестная ошибка'}</>
      )}

      {recipesListStore.meta === Meta.success && (
        <>
          <Header />
          <Subtitle />
          <Filters />

          <RecipesList recipesList={recipesListStore.list} />
          <Paginator pages={recipesListStore.pages} />
        </>
      )}
    </div>
  );
};

export default observer(RecipesListPage);
