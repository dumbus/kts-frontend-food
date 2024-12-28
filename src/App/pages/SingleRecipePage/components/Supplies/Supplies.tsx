import classNames from 'classnames';
import React from 'react';

import NothingFound from 'components/NothingFound';
import Text from 'components/Text';

import { getCapitalizedWord } from 'utils/helpers';

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
        <div key={idx} className={styles['supplies-list__item']}>
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
  const isEmpty = !list.length;

  return (
    <div className={styles['supplies']}>
      <Text tag="h2" view="p-20" maxLines={1}>
        {getCapitalizedWord(type)}
      </Text>

      <div
        className={classNames(styles['supplies-list'], {
          [styles['supplies-list__empty']]: isEmpty,
        })}
      >
        {isEmpty ? <NothingFound /> : list}
      </div>
    </div>
  );
};

export default Supplies;
