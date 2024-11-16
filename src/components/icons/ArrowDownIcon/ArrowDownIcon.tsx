import * as React from 'react';
import Icon, { IconProps } from '../Icon';

import styles from './ArrowDownIcon.module.scss';

const ArrowDownIcon: React.FC<IconProps> = ({ color = 'primary', ...props }) => {
  const className = styles[`color-text-${color}`];

  return (
    <Icon {...props}>
      <path
        className={className}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.33563 8.74741L3.66436 7.25259L12 14.662L20.3356 7.25259L21.6644 8.74741L12 17.338L2.33563 8.74741Z"
      />
    </Icon>
  );
};

export default ArrowDownIcon;
