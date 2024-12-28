import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import Text from 'components/Text';

import { ROUTES } from 'config/routes';

import { CurrentPageName } from 'types/entities';
import { getTimeStamp, getCurrentPageName } from 'utils/helpers';

import styles from './Menu.module.scss';

const Menu = () => {
  const location = useLocation();

  const currentPage = getCurrentPageName(location.pathname);
  const timestamp = getTimeStamp();

  const getLinkClassName = (pageName: CurrentPageName) => {
    return classNames(styles['menu__item'], {
      [styles['menu__item-active']]: currentPage === pageName,
    });
  };

  return (
    <div className={styles['menu']}>
      <Link to={ROUTES.recipes()}>
        <Text className={getLinkClassName('recipes')} view="p-16">
          Recipe Search
        </Text>
      </Link>

      <Link to={ROUTES.favorites()}>
        <Text className={getLinkClassName('favorites')} view="p-16">
          Favorite Recipes
        </Text>
      </Link>

      <Link to={ROUTES.randomRecipe(timestamp)}>
        <Text className={getLinkClassName('random')} view="p-16">
          Random Recipe
        </Text>
      </Link>
    </div>
  );
};

export default Menu;
