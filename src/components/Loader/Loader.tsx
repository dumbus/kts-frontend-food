import * as React from 'react';

import './Loader.scss';

export type LoaderProps = {
  /** Размер */
  size?: 's' | 'm' | 'l';
  /** Дополнительный класс */
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({ size = 'l', className = '' }) => {
  return (
    <div className={`loader-container loader-container-${size} ${className}`}>
      <div className={`loader-circle loader-circle-${size}`} />
    </div>
  );
};

export default Loader;
