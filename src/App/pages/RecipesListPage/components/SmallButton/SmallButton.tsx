import classNames from 'classnames';
import React from 'react';

import Text from 'components/Text';

import styles from './SmallButton.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние блокировки */
  disabled?: boolean;
  /** Состояние "выбрано" */
  active?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
  /** Class кнопки */
  className?: string;
  /** Является ли кнопка текстовой  */
  noText?: boolean;
};

const SmallButton: React.FC<ButtonProps> = ({
  disabled = false,
  noText = false,
  active = false,
  children,
  className,
  ...props
}) => {
  const buttonClasses = classNames(styles['small-button'], className, {
    [styles['small-button__active']]: active,
  });

  return (
    <button className={buttonClasses} disabled={disabled || active} {...props}>
      {noText ? (
        children
      ) : (
        <Text view="p-18" weight="normal" tag="div">
          {children}
        </Text>
      )}
    </button>
  );
};

export default SmallButton;
