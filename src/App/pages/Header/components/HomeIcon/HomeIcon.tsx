import * as React from 'react';
import Icon, { IconProps } from 'components/icons/Icon';

const HomeIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Icon width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path
        style={{
          fill: 'none',
          strokeWidth: 1.5,
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          stroke: '#b5460f',
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        d="M 2 12.203125 C 2 9.914062 2 8.769531 2.519531 7.824219 C 3.039062 6.875 3.988281 6.285156 5.882812 5.109375 L 7.882812 3.867188 C 9.890625 2.621094 10.890625 2 12 2 C 13.109375 2 14.109375 2.621094 16.117188 3.867188 L 18.117188 5.109375 C 20.011719 6.285156 20.960938 6.875 21.480469 7.824219 C 22 8.769531 22 9.914062 22 12.203125 L 22 13.726562 C 22 17.625 22 19.578125 20.828125 20.789062 C 19.65625 22 17.769531 22 14 22 L 10 22 C 6.230469 22 4.34375 22 3.171875 20.789062 C 2 19.578125 2 17.625 2 13.726562 Z M 2 12.203125 "
      />
      <path
        style={{
          fill: 'none',
          strokeWidth: 1.5,
          strokeLinecap: 'round',
          strokeLinejoin: 'miter',
          stroke: '#b5460f',
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        d="M 15 18 L 9 18 "
      />
    </Icon>
  );
};

export default HomeIcon;
