import React from 'react';

import Text from 'components/Text';
import ArrowSideIcon from 'components/icons/ArrowSideIcon';

import styles from './Header.module.scss';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className={styles['header']}>
      <ArrowSideIcon className={styles['header__back']} side="left" color="accent" />

      <Text className={styles['header__text']} tag="h1">
        {title}
      </Text>
    </div>
  );
};

export default Header;
