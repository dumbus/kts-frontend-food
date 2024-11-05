import HeartIcon from '../HeartIcon';
import PersonIcon from '../PersonIcon';

import styles from './Buttons.module.scss';

const Buttons = () => {
  return (
    <div className={styles['buttons']}>
      <div className={styles['buttons__button']}>
        <HeartIcon />
      </div>

      <div className={styles['buttons__button']}>
        <PersonIcon />
      </div>
    </div>
  );
};

export default Buttons;
