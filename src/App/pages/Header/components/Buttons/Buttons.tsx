import { Link } from 'react-router-dom';

import { ROUTES } from 'config/routes';

import { getTimeStamp } from 'utils/helpers';

import HeartIcon from '../../../../../components/icons/HeartIcon';
import PersonIcon from '../PersonIcon';
import RandomIcon from '../RandomIcon';

import styles from './Buttons.module.scss';

const Buttons = () => {
  const timestamp = getTimeStamp();

  return (
    <div className={styles['buttons']}>
      <Link to={ROUTES.randomRecipe(timestamp)}>
        <div className={styles['buttons__button']}>
          <RandomIcon />
        </div>
      </Link>

      <Link to={ROUTES.favorites()}>
        <div className={styles['buttons__button']}>
          <HeartIcon />
        </div>
      </Link>

      <div className={styles['buttons__button']}>
        <PersonIcon />
      </div>
    </div>
  );
};

export default Buttons;
