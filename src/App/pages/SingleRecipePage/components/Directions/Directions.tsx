import React from 'react';

import NothingFound from 'components/NothingFound';
import Text from 'components/Text';

import { IDirection } from 'types/entities';

import styles from './Directions.module.scss';

type DirectionsProps = {
  directions: IDirection[];
};

const Directions: React.FC<DirectionsProps> = ({ directions }) => {
  const renderList = (directions: IDirection[]) => {
    const list = directions.map(({ number, step }) => {
      return (
        <div className={styles['directions__item']} key={number}>
          <Text view="p-16" weight="bold">
            {`Step ${number}`}
          </Text>
          <Text view="p-16">{step}</Text>
        </div>
      );
    });

    return list;
  };

  const list = renderList(directions);
  const isEmpty = !list.length;

  return (
    <div className={styles['directions']}>
      <Text className={styles['directions__title']} view="p-20" tag="h2">
        Directions
      </Text>

      <div className={styles['directions__list']}>{isEmpty ? <NothingFound /> : list}</div>
    </div>
  );
};

export default Directions;
