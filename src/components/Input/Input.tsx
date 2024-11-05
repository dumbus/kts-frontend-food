import classNames from 'classnames';
import { useState, useEffect, forwardRef } from 'react';

import styles from './Input.module.scss';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
  /** Слот для иконки справа */
  afterSlot?: React.ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, afterSlot, type = 'text', className, ...props }, ref) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onChange(e.target.value);
    };

    const rootClass = classNames(styles['input-container'], className);

    return (
      <div className={rootClass}>
        <input
          className={styles['input']}
          type={type}
          value={inputValue}
          onChange={handleChange}
          ref={ref}
          {...props}
        />
        {afterSlot && <div className={styles['after-slot']}>{afterSlot}</div>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
