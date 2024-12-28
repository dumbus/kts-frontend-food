import { Link } from 'react-router-dom';

import { ROUTES } from 'config/routes';

import Logo from './components/Logo';
import Menu from './components/Menu';
import MenuMobile from './components/MenuMobile';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles['header']}>
      <Link to={ROUTES.recipes()}>
        <Logo />
      </Link>
      <Menu />
      <MenuMobile />
    </div>
  );
};

export default Header;
