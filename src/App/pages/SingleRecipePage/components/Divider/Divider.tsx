import classNames from 'classnames';
import React from 'react';

import styles from './Divider.module.scss';

type DividerProps = {
  className?: string;
};

const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  const rootClassName = classNames(styles['divider'], className);

  return (
    <div className={rootClassName}>
      <div className={styles['divider__circle']} />
      <div className={styles['divider__line']} />
    </div>
  );
};

export default Divider;
