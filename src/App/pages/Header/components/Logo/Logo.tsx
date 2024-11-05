import Text from 'components/Text';

import LogoIcon from '../LogoIcon';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles['logo']}>
      <LogoIcon />
      <Text className={styles['logo__text']} tag="h1" view="p-20">
        Food Client
      </Text>
    </div>
  );
};

export default Logo;
