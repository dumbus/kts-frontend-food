import Text from 'components/Text';

import styles from './Title.module.scss';

const Title = () => {
  return (
    <>
      <Text className={styles['title']} tag="h1" weight="bold" view="title" color="accent">
        Favorite Recipes
      </Text>

      <Text className={styles['subtitle']} tag="h2" weight="normal" view="p-20">
        Your handpicked recipes, <u>all in one place</u>
      </Text>
    </>
  );
};

export default Title;
