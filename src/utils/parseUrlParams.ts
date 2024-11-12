import { IQueryParams, IMultiDropdownOption } from 'types/entities';

import { Categories } from './categories';

export const parseUrlParams = (params: URLSearchParams): IQueryParams => {
  const queryParams: IQueryParams = {
    name: '',
    type: [],
    page: 1,
  };

  const name = params.get('name');
  if (name) {
    queryParams.name = name;
  }

  const type = params.get('type');
  if (type) {
    queryParams.type = type.split(',').reduce<IMultiDropdownOption[]>((acc, key) => {
      const value = Categories[key as keyof typeof Categories];
      if (value) {
        acc.push({ key, value });
      }
      return acc;
    }, []);
  }

  const page = params.get('page');
  if (page) {
    queryParams.page = parseInt(page, 10);
  }

  return queryParams;
};
