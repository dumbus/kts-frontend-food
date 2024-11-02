import classNames from 'classnames';
import React, { useState, useRef, useEffect } from 'react';

import Input from '../Input';
import ArrowDownIcon from '../icons/ArrowDownIcon';

import styles from './MultiDropdown.module.scss';

export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  className?: string;
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Возвращает строку которая будет выводится в инпуте. В случае если опции не выбраны, строка должна отображаться как placeholder. */
  getTitle: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({ className, options, value, onChange, disabled, getTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputChange = (inputValue: string) => {
    setFilter(inputValue);
    setIsOpen(true);
  };

  const handleSelection = (option: Option) => {
    const isSelected = value.some((selected) => selected.key === option.key);

    const newValue = isSelected ? value.filter((selected) => selected.key !== option.key) : [...value, option];

    onChange(newValue);
  };

  const filteredOptions = filter
    ? options.filter((option) => option.value.toLowerCase().includes(filter.toLowerCase()))
    : options;

  const rootClass = classNames(styles['multi-dropdown'], className);

  return (
    <div className={rootClass} ref={dropdownRef}>
      <Input
        value={isOpen ? filter : value.length ? getTitle(value) : ''}
        placeholder={getTitle(value)}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        disabled={disabled}
        afterSlot={<ArrowDownIcon width={20} height={20} color="secondary" />}
      />

      {isOpen && !disabled && filteredOptions.length > 0 && (
        <div className={styles['multi-dropdown-options']}>
          {filteredOptions.length > 0
            ? filteredOptions.map((option) => {
                const isSelected = value.some((selected) => selected.key === option.key);

                const optionClassname = classNames(styles['multi-dropdown-option'], {
                  [styles.selected]: isSelected,
                });

                return (
                  <div key={option.key} className={optionClassname} onClick={() => handleSelection(option)}>
                    {option.value}
                  </div>
                );
              })
            : ''}
        </div>
      )}
    </div>
  );
};

export default MultiDropdown;
