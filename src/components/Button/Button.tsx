import classNames from 'classnames';
import * as React from 'react';

import Loader from '../Loader';
import Text from '../Text';

import styles from './Button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
  /** Class кнопки */
  className?: string;
  /** Является ли кнопка текстовой  */
  noText?: boolean;
};

const Button: React.FC<ButtonProps> = ({ loading = false, noText = false, children, className, ...props }) => {
  const buttonClasses = classNames(styles['button'], className, {
    [styles['button-loading']]: loading,
  });

  return (
    <button className={buttonClasses} disabled={loading} {...props}>
      {loading && <Loader size="s" className={styles['loader-button']} />}
      {noText ? (
        children
      ) : (
        <Text view="p-18" weight="normal">
          {children}
        </Text>
      )}
    </button>
  );
};

export default Button;
