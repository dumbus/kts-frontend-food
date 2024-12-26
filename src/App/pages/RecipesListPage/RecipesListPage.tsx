import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Error from 'components/Error';
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

  const rootClass = classNames('container', styles['recipes-list'], {
    [styles['recipes-list__error']]: recipesListStore.meta === Meta.error,
  });

  return (
    <div className={rootClass}>
      {recipesListStore.meta === Meta.loading && <Loader className={styles['recipes-list__loader']} />}

      {recipesListStore.meta === Meta.error && (
        <Error errorMessage={recipesListStore.error?.message || 'Unknown error'} />
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
