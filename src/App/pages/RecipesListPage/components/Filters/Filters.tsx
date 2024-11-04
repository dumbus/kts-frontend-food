import { useState } from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import MultiDropdown, { Option } from 'components/MultiDropdown';
import SearchIcon from 'components/icons/SearchIcon';

import styles from './Filters.module.scss';

const tmpOptions: Option[] = [
  { key: 'key1', value: 'option1' },
  { key: 'key2', value: 'option2' },
  { key: 'key3', value: 'option3' },
];

const Filters = () => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const tmpOnChange = (newValue: Option[]) => {
    setSelectedOptions(newValue);
  };

  const tmpGetTitle = (elements: Option[]) => {
    if (elements.length > 0) {
      return elements.map((el: Option) => el.value).join(', ');
    }

    return 'Categories';
  };

  return (
    <div className={styles['filters']}>
      <div className={styles['filters__search']}>
        <Input value="" placeholder="Enter dishes" onChange={() => {}} />

        <Button noText>
          <SearchIcon color="white" />
        </Button>
      </div>

      <MultiDropdown
        className={styles['filters__categories']}
        options={tmpOptions}
        value={selectedOptions}
        onChange={tmpOnChange}
        getTitle={tmpGetTitle}
      />
    </div>
  );
};

export default Filters;
