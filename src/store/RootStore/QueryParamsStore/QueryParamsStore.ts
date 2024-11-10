import { action, computed, makeObservable, observable } from 'mobx';

type PrivateFields = '_search';

export default class QueryParamsStore {
  private _search: string = '';

  constructor() {
    makeObservable<QueryParamsStore, PrivateFields>(this, {
      _search: observable.ref,
      search: computed,
      setSearch: action,
    });
  }

  get search(): string {
    return this._search;
  }

  setSearch(search: string) {
    search = search.startsWith('?') ? search.slice(1) : search;

    if (this._search !== search) {
      this._search = search;
    }
  }
}
