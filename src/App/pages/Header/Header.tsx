import { Link } from 'react-router-dom';

import Buttons from './components/Buttons';
import Logo from './components/Logo';
import Menu from './components/Menu';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles['header']}>
      <Link to={'/recipes'}>
        <Logo />
      </Link>
      <Menu />
      <Buttons />
    </div>
  );
};

export default Header;
