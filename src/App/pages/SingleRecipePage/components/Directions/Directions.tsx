import React from 'react';

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

  return (
    <div className={styles['directions']}>
      <Text view="p-20" tag="h2">
        Directions
      </Text>

      <div className={styles['directions__list']}>{list}</div>
    </div>
  );
};

export default Directions;
