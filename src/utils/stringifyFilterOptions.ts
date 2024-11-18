import { IMultiDropdownOption } from 'types/entities';

export const stringifyFilterOptions = (options: IMultiDropdownOption[]) => {
  return options.map((option) => option.key).join(',');
};
