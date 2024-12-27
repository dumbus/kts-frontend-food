import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import Error from 'components/Error';
import Loader from 'components/Loader';

import useLocalStore from 'hooks/useLocalStore';
import FavoritesStore from 'store/FavoritesStore';
import { Meta } from 'utils/enums';

import FavoritesList from './components/FavoritesList/FavoritesList';
import Title from './components/Title';

import styles from './FavoritesPage.module.scss';

// TODO: tmp solution, use localStorage later
const favoritesIds = [715538, 716429];

const FavoritesPage = () => {
  const favoritesStore = useLocalStore(() => new FavoritesStore());

  useEffect(() => {
    favoritesStore.getRecipesListData(favoritesIds);
  }, [favoritesStore]);

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
