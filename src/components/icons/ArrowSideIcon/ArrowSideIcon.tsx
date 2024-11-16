import * as React from 'react';
import Icon, { IconProps } from '../Icon';

import styles from './ArrowSideIcon.module.scss';

const ArrowSideIcon: React.FC<IconProps> = ({ color = 'primary', side, ...props }) => {
  const className = styles[`color-text-${color}`];

  return (
    <Icon width={32} height={32} viewBox="0 0 32 32" {...props}>
      {side === 'left' && (
        <path
          d="M20.12 26.5599L11.4267 17.8666C10.4 16.8399 10.4 15.1599 11.4267 14.1333L20.12 5.43994"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        />
      )}

      {side === 'right' && (
        <path
          d="M11.88 26.5599L20.5733 17.8666C21.6 16.8399 21.6 15.1599 20.5733 14.1333L11.88 5.43994"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        />
      )}
    </Icon>
  );
};

export default ArrowSideIcon;
