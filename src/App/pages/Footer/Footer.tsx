import Text from 'components/Text';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles['footer']}>
      <Text>&copy; 2024, </Text>
      <a className={styles['footer__link']} href="https://github.com/dumbus" target="_blank" rel="noopener noreferrer">
        <Text>dumbus (Дегтярёв Максим)</Text>
      </a>
    </div>
  );
};

export default Footer;
