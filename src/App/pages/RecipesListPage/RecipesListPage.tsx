import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Loader from 'components/Loader';

import useLocalStore from 'hooks/useLocalStore';
import RecipesListStore from 'store/RecipesListStore';
import rootStore from 'store/RootStore';
import { Meta } from 'utils/meta';

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
    const searchParam = params.get('search') || '';
    rootStore.query.setSearch(searchParam);

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
          <Paginator page={1} pages={9} onPageSwitch={() => {}} />
        </>
      )}
    </div>
  );
};

export default observer(RecipesListPage);
