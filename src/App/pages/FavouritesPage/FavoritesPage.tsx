import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import Error from 'components/Error';
import Loader from 'components/Loader';

import useLocalStore from 'hooks/useLocalStore';
import FavoritesStore from 'store/FavoritesStore';
import rootStore from 'store/RootStore';

import { Meta } from 'utils/enums';

import FavoritesList from './components/FavoritesList/FavoritesList';
import Title from './components/Title';

import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const favoritesStore = useLocalStore(() => new FavoritesStore());

  const { favoritesIds } = rootStore.localStore;

  useEffect(() => {
    favoritesStore.getRecipesListData(favoritesIds);
  }, [favoritesStore, favoritesIds]);

  const rootClass = classNames('container', styles['favorites'], styles['recipes-list'], {
    [styles['favorites__error']]: favoritesStore.meta === Meta.error,
  });

  return (
    <div className={rootClass}>
      {favoritesStore.meta === Meta.loading && <Loader className={styles['favorites__loader']} />}

      {favoritesStore.meta === Meta.error && <Error errorMessage={favoritesStore.error?.message || 'Unknown error'} />}

      {favoritesStore.meta === Meta.success && (
        <>
          <Title />
          <FavoritesList favoritesList={favoritesStore.list} />
        </>
      )}
    </div>
  );
};

export default observer(FavoritesPage);
