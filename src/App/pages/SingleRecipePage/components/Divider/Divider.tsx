import classNames from 'classnames';
import React from 'react';

import styles from './Divider.module.scss';

type DividerProps = {
  className?: string;
};

const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  const rootClass = classNames(styles['divider'], className);

  return (
    <div className={rootClass}>
      <div className={styles['divider__circle']} />
      <div className={styles['divider__line']} />
    </div>
  );
};

export default Divider;
