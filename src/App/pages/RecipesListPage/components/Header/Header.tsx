import recipesListBg from 'assets/recipes-list-bg.jpg';
import recipesListTitle from 'assets/recipes-list-title.png';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles['header']}>
      <img className={styles['header__bg']} src={recipesListBg} alt="recipes page background" />
      <img className={styles['header__title']} src={recipesListTitle} alt="recipes page title" />
    </div>
  );
};

export default Header;
