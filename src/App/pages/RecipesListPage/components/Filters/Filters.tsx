import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import MultiDropdown from 'components/MultiDropdown';
import SearchIcon from 'components/icons/SearchIcon';

import useLocalStore from 'hooks/useLocalStore';
import RecipesListStore from 'store/RecipesListStore';
import rootStore from 'store/RootStore';

import { IMultiDropdownOption } from 'types/entities';
import { Categories } from 'utils/categories';
import { getFilterOptions } from 'utils/getFilterOptions';

import styles from './Filters.module.scss';

const Filters = () => {
  const recipesListStore = useLocalStore(() => new RecipesListStore());
  const [selectedOptions, setSelectedOptions] = useState<IMultiDropdownOption[]>([]);

  const navigate = useNavigate();

  const searchValue = rootStore.query.search;

  const onInputChange = (newValue: string) => {
    rootStore.query.setSearch(newValue);
    updateUrl(newValue);
  };

  const onMultidropdownChange = (newValue: IMultiDropdownOption[]) => {
    setSelectedOptions(newValue);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    updateUrl(searchValue, true);
    recipesListStore.getRecipesListData();
  };

  const getTitle = (elements: IMultiDropdownOption[]) => {
    if (elements.length > 0) {
      return elements.map((el: IMultiDropdownOption) => el.value).join(', ');
    }

    return 'Categories';
  };

  const updateUrl = (searchValue: string, needReload = false) => {
    const params = new URLSearchParams(location.search);

    if (searchValue) {
      params.set('search', searchValue);
    } else {
      params.delete('search');
    }

    if (needReload) {
      navigate({ search: params.toString() });
    } else {
      window.history.replaceState(null, '', `${location.pathname}?${params.toString()}`);

      // Этот подход не работает, как бы я не старался...
      // navigate({ search: params.toString() }, { replace: true });
    }
  };

  const options = getFilterOptions(Categories);

  return (
    <div className={styles['filters']}>
      <div className={styles['filters__search']}>
        <Input value={searchValue} placeholder="Enter dishes" onChange={onInputChange} />

        <Button type="button" onClick={onSubmit} noText>
          <SearchIcon color="white" />
        </Button>
      </div>

      <MultiDropdown
        className={styles['filters__categories']}
        options={options}
        value={selectedOptions}
        onChange={onMultidropdownChange}
        getTitle={getTitle}
      />
    </div>
  );
};

export default observer(Filters);
