import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';

import Button from 'components/Button';
import Input from 'components/Input';
import MultiDropdown from 'components/MultiDropdown';
import SearchIcon from 'components/icons/SearchIcon';

import useSearchQuery from 'hooks/useSearchQuery';
import rootStore from 'store/RootStore';

import { IMultiDropdownOption } from 'types/entities';
import { Categories } from 'utils/categories';
import { getFilterOptions } from 'utils/getFilterOptions';

import styles from './Filters.module.scss';

const Filters = () => {
  const setSearchQuery = useSearchQuery();

  const onInputChange = (newValue: string) => {
    runInAction(() => {
      setSearchQuery({ name: newValue });
    });
  };

  const onMultidropdownChange = (newValue: IMultiDropdownOption[]) => {
    runInAction(() => {
      setSearchQuery({ type: newValue });
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    runInAction(() => {
      setSearchQuery({ page: 1 }, true);
    });
  };

  const getTitle = (elements: IMultiDropdownOption[]) => {
    if (elements.length > 0) {
      return elements.map((el: IMultiDropdownOption) => el.value).join(', ');
    }

    return 'Categories';
  };

  const options = getFilterOptions(Categories);

  return (
    <div className={styles['filters']}>
      <div className={styles['filters__search']}>
        <Input value={rootStore.query.name} placeholder="Enter dishes" onChange={onInputChange} />

        <Button type="button" onClick={onSubmit} noText>
          <SearchIcon color="white" />
        </Button>
      </div>

      <MultiDropdown
        className={styles['filters__categories']}
        options={options}
        value={rootStore.query.type}
        onChange={onMultidropdownChange}
        getTitle={getTitle}
      />
    </div>
  );
};

export default observer(Filters);
