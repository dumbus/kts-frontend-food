import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Input from 'components/Input';
import MultiDropdown from 'components/MultiDropdown';
import SearchIcon from 'components/icons/SearchIcon';

import rootStore from 'store/RootStore';

import { IMultiDropdownOption } from 'types/entities';
import { Categories } from 'utils/categories';
import { getFilterOptions } from 'utils/getFilterOptions';

import styles from './Filters.module.scss';

const Filters = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = rootStore.query.query;

  const onInputChange = (newValue: string) => {
    rootStore.query.setParams({ name: newValue });

    // Надо бы вынести в хук, чтобы избежать повторения
    const newUrl = query ? `${location.pathname}?${query}` : location.pathname;
    window.history.replaceState({}, '', newUrl);
  };

  const onMultidropdownChange = (newValue: IMultiDropdownOption[]) => {
    rootStore.query.setParams({ type: newValue });

    // Надо бы вынести в хук, чтобы избежать повторения
    const newUrl = query ? `${location.pathname}?${query}` : location.pathname;
    window.history.replaceState({}, '', newUrl);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    rootStore.query.setParams({ page: 1 });

    // Надо бы вынести в хук, чтобы избежать повторения
    const newUrl = query ? `${window.location.pathname}?${query}` : window.location.pathname;
    navigate(newUrl);
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
