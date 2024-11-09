import { useState } from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import MultiDropdown from 'components/MultiDropdown';
import SearchIcon from 'components/icons/SearchIcon';

import { IMultiDropdownOption } from 'types/entities';
import { Categories } from 'utils/categories';
import { getFilterOptions } from 'utils/getFilterOptions';

import styles from './Filters.module.scss';

const Filters = () => {
  const [selectedOptions, setSelectedOptions] = useState<IMultiDropdownOption[]>([]);
  const [inputValue, setInputValue] = useState('');

  const options = getFilterOptions(Categories);

  const tmpInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const tmpMultidropdownChange = (newValue: IMultiDropdownOption[]) => {
    setSelectedOptions(newValue);
  };

  const tmpGetTitle = (elements: IMultiDropdownOption[]) => {
    if (elements.length > 0) {
      return elements.map((el: IMultiDropdownOption) => el.value).join(', ');
    }

    return 'Categories';
  };

  return (
    <div className={styles['filters']}>
      <div className={styles['filters__search']}>
        <Input value={inputValue} placeholder="Enter dishes" onChange={tmpInputChange} />

        <Button noText>
          <SearchIcon color="white" />
        </Button>
      </div>

      <MultiDropdown
        className={styles['filters__categories']}
        options={options}
        value={selectedOptions}
        onChange={tmpMultidropdownChange}
        getTitle={tmpGetTitle}
      />
    </div>
  );
};

export default Filters;
