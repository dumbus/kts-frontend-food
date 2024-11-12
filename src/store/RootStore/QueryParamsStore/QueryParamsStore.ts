import { action, makeObservable, observable, computed, reaction } from 'mobx';
import { IMultiDropdownOption, IQueryParams } from 'types/entities';
import { stringifyFilterOptions } from 'utils/stringifyFilterOptions';

type PrivateFields = '_params' | '_query' | '_updateQuery';

export default class QueryParamsStore {
  private _params: IQueryParams = {};
  private _query: string = '';

  constructor() {
    makeObservable<QueryParamsStore, PrivateFields>(this, {
      _params: observable.ref,
      _query: observable.ref,
      name: computed,
      type: computed,
      page: computed,
      query: computed,
      setParams: action,
      _updateQuery: action,
    });

    reaction(
      () => this._params,
      () => {
        this._updateQuery();
      },
    );
  }

  get name(): string {
    return this._params.name || '';
  }

  get type(): IMultiDropdownOption[] {
    return this._params.type || [];
  }

  get page(): string {
    return this._params.page ? String(this._params.page) : '1';
  }

  get query(): string {
    return this._query;
  }

  setParams(newParams: IQueryParams): void {
    this._params = {
      ...this._params,
      ...newParams,
    };
  }

  private _updateQuery() {
    const params: string[] = [];

    if (this._params.name) {
      params.push(`name=${encodeURIComponent(this._params.name)}`);
    }

    if (this._params.type) {
      const typeStr = stringifyFilterOptions(this._params.type);

      if (typeStr) {
        params.push(`type=${encodeURIComponent(typeStr)}`);
      }
    }

    if (this._params.page) {
      params.push(`page=${encodeURIComponent(String(this._params.page))}`);
    }

    this._query = params.join('&');
  }
}
