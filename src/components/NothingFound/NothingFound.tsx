import emptyImg from 'assets/empty.png';

import Text from 'components/Text';

import styles from './NothingFound.module.scss';

interface NothingFoundProps {
  withImage?: boolean;
}

const NothingFound: React.FC<NothingFoundProps> = ({ withImage = false }) => {
  return (
    <div className={styles['nothing-found']}>
      {withImage && <img src={emptyImg} alt="nothing found image" />}
      <Text view="p-20" weight="bold" color="primary">
        Nothing here yet...
      </Text>
    </div>
  );
};

export default NothingFound;
