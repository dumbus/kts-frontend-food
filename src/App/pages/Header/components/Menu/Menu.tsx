import Text from 'components/Text';

import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles['menu']}>
      <Text className={`${styles['menu__item']} ${styles['menu__item-active']}`} view="p-16">
        Recipes
      </Text>
      <Text className={styles['menu__item']} view="p-16">
        Ingredients
      </Text>
      <Text className={styles['menu__item']} view="p-16">
        Products
      </Text>
      <Text className={styles['menu__item']} view="p-16">
        Menu Items
      </Text>
      <Text className={styles['menu__item']} view="p-16">
        Meal Planning
      </Text>
    </div>
  );
};

export default Menu;
