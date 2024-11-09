import { IMultiDropdownOption } from 'types/entities';

export const getFilterOptions = (enumObj: Record<string, string>): IMultiDropdownOption[] => {
  return Object.values(enumObj).map((value, index) => ({
    key: `key${index + 1}`,
    value: value,
  }));
};
