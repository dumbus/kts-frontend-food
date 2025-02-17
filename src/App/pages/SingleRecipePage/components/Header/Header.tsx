import React from 'react';
import { Link } from 'react-router-dom';

import Text from 'components/Text';
import ArrowSideIcon from 'components/icons/ArrowSideIcon';
import { ROUTES } from 'config/routes';

import styles from './Header.module.scss';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className={styles['header']}>
      <Link to={ROUTES.recipes()}>
        <ArrowSideIcon className={styles['header__back']} side="left" color="accent" />
      </Link>

      <Text className={styles['header__text']} tag="h1">
        {title}
      </Text>
    </div>
  );
};

export default Header;
