import * as React from 'react';

export type IconProps = React.SVGAttributes<SVGElement> & {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'white';
  width?: number;
  height?: number;
  viewBox?: string;
  side?: 'left' | 'right';
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({
  children,
  className = '',
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  ...props
}) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" className={className} {...props}>
      {children}
    </svg>
  );
};

export default Icon;
