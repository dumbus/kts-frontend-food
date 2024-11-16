import classNames from 'classnames';
import * as React from 'react';

import styles from './Loader.module.scss';

type LoaderProps = {
  /** Размер */
  size?: 's' | 'm' | 'l';
  /** Дополнительный класс */
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({ size = 'l', className = '' }) => {
  const containerClassName = classNames(styles['loader-container'], styles[`loader-container-${size}`], className);
  const circleClassName = classNames(styles['loader-circle'], styles[`loader-circle-${size}`]);

  return (
    <div className={containerClassName}>
      <div className={circleClassName} />
    </div>
  );
};

export default Loader;
