import classNames from 'classnames';

import emptyImg from 'assets/empty.png';

import Text from 'components/Text';

import styles from './NothingFound.module.scss';

interface NothingFoundProps {
  withImage?: boolean;
}

const NothingFound: React.FC<NothingFoundProps> = ({ withImage = false }) => {
  const rootClass = classNames(styles['nothing-found'], {
    [styles['nothing-found__with-image']]: withImage,
  });

  return (
    <div className={rootClass}>
      {withImage && <img src={emptyImg} alt="nothing found image" />}
      <Text view="p-20" weight="bold" color="primary">
        Nothing here yet...
      </Text>
    </div>
  );
};

export default NothingFound;
