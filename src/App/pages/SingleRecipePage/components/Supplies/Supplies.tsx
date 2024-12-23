import React from 'react';

import Text from 'components/Text';

import { firstLetterToUpperCase } from 'utils/firstLetterToUpperCase';

import DishIcon from '../DishIcon';
import LadleIcon from '../LadleIcon';

import styles from './Supplies.module.scss';

type SuppliesProps = {
  type: 'ingredients' | 'equipment';
  items: string[];
};

const Supplies: React.FC<SuppliesProps> = ({ type, items }) => {
  const renderList = (items: string[]) => {
    const list = items.map((item, idx) => {
      return (
        <div key={idx} className={styles['supplies__item']}>
          {type === 'ingredients' ? <DishIcon /> : <LadleIcon />}
          <Text tag="div" view="p-16" maxLines={1}>
            {item}
          </Text>
        </div>
      );
    });

    return list;
  };

  const list = renderList(items);

  return (
    <div className={styles['supplies']}>
      <Text tag="h2" view="p-20" maxLines={1}>
        {firstLetterToUpperCase(type)}
      </Text>

      <div className={styles['supplies__list']}>{list}</div>
    </div>
  );
};

export default Supplies;
