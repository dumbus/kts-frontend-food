import { action, makeObservable, observable, computed, reaction } from 'mobx';
import { IMultiDropdownOption, IQueryParams } from 'types/entities';
import { stringifyFilterOptions } from 'utils/stringifyFilterOptions';

type PrivateFields = '_params' | '_query' | '_reload' | '_updateQuery';

export default class QueryParamsStore {
  private _params: IQueryParams = {};
  private _query: string = '';
  private _reload: boolean = false;

  constructor() {
    makeObservable<QueryParamsStore, PrivateFields>(this, {
      _params: observable.ref,
      _query: observable,
      _reload: observable,
      name: computed,
      type: computed,
      page: computed,
      query: computed,
      reload: computed,
      setParams: action,
      setReload: action,
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

  get reload(): boolean {
    return this._reload;
  }

  setParams(newParams: IQueryParams, needReload = false): void {
    this._params = {
      ...this._params,
      ...newParams,
    };

    this.setReload(needReload);
  }

  setReload(needReload = false): void {
    this._reload = needReload;
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
