import { IMultiDropdownOption } from 'types/entities';

export const getFilterOptions = (enumObj: Record<string, string>): IMultiDropdownOption[] => {
  return Object.entries(enumObj).map(([key, value]) => ({
    key,
    value,
  }));
};

export const getStringifiedFilterOptions = (options: IMultiDropdownOption[]) => {
  return options.map((option) => option.key).join(',');
};
