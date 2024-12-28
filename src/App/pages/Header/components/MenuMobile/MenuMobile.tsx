import { Link } from 'react-router-dom';

import { ROUTES } from 'config/routes';

import { getTimeStamp } from 'utils/helpers';

import HeartIcon from '../HeartIcon';
import HomeIcon from '../HomeIcon';
import RandomIcon from '../RandomIcon';

import styles from './MenuMobile.module.scss';

const MenuMobile = () => {
  const timestamp = getTimeStamp();

  return (
    <div className={styles['menu-mobile']}>
      <Link to={ROUTES.recipes()}>
        <div className={styles['menu-mobile__button']}>
          <HomeIcon />
        </div>
      </Link>

      <Link to={ROUTES.favorites()}>
        <div className={styles['menu-mobile__button']}>
          <HeartIcon />
        </div>
      </Link>

      <Link to={ROUTES.randomRecipe(timestamp)}>
        <div className={styles['menu-mobile__button']}>
          <RandomIcon />
        </div>
      </Link>
    </div>
  );
};

export default MenuMobile;
