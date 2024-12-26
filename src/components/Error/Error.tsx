import classNames from 'classnames';
import React from 'react';

import Text from 'components/Text';
import ErrorIcon, { ErrorIconColor } from 'components/icons/ErrorIcon';

import styles from './Error.module.scss';

type ErrorProps = {
  /** Дополнительный classname */
  className?: string;
  /** Текст ошибки */
  errorMessage?: string;
  /** Цвет компонента ошибки */
  errorColor?: ErrorIconColor;
};

const Error: React.FC<ErrorProps> = ({ className, errorMessage, errorColor = 'error' }) => {
  const errorClass = classNames(styles['error'], className);

  return (
    <div className={errorClass}>
      <ErrorIcon color={errorColor} />

      <Text color={errorColor} view="p-20">
        Oops... Something went wrong...
      </Text>
      <Text color={errorColor} view="p-20">
        Error: <b>{errorMessage}</b>
      </Text>
    </div>
  );
};

export default Error;
