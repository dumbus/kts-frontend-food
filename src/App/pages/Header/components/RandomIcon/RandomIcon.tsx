import * as React from 'react';
import Icon, { IconProps } from 'components/icons/Icon';

const RandomIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Icon width={24} height={24} viewBox="0 0 16 16" {...props}>
      <g fill="#b5460f">
        <path d="M5 4a1 1 0 000 2h.01a1 1 0 000-2H5zM7 8a1 1 0 011-1h.01a1 1 0 010 2H8a1 1 0 01-1-1zM11.01 10a1 1 0 100 2h.01a1 1 0 100-2h-.01z" />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.25 1A2.25 2.25 0 001 3.25v9.5A2.25 2.25 0 003.25 15h9.5A2.25 2.25 0 0015 12.75v-9.5A2.25 2.25 0 0012.75 1h-9.5zM2.5 3.25a.75.75 0 01.75-.75h9.5a.75.75 0 01.75.75v9.5a.75.75 0 01-.75.75h-9.5a.75.75 0 01-.75-.75v-9.5z"
        />
      </g>
    </Icon>
  );
};

export default RandomIcon;
