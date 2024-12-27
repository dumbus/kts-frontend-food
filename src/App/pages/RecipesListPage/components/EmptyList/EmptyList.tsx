import emptyImg from 'assets/empty.png';

import Text from 'components/Text';

import styles from './EmptyList.module.scss';

const EmptyList = () => {
  return (
    <div className={styles['empty-list']}>
      <img src={emptyImg} alt="nothing found image" />
      <Text view="p-20" weight="bold" color="primary">
        Nothing found...
      </Text>
    </div>
  );
};

export default EmptyList;
