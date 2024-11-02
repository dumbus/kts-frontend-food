import classNames from 'classnames';
import * as React from 'react';

import Loader from '../Loader';
import Text from '../Text';

import './Button.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
  /** Class кнопки */
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ loading = false, children, className, ...props }) => {
  const buttonClasses = classNames('button', className, {
    'button-loading': loading,
  });

  return (
    <button className={buttonClasses} disabled={loading} {...props}>
      {loading && <Loader size="s" className="loader-button" />}
      <Text view="p-18" weight="normal">
        {children}
      </Text>
    </button>
  );
};

export default Button;
