import { action, computed, makeObservable, observable } from 'mobx';

type PrivateFields = '_search' | '_page';

export default class QueryParamsStore {
  private _search: string = '';
  private _page: number = 1;

  constructor() {
    makeObservable<QueryParamsStore, PrivateFields>(this, {
      _search: observable,
      _page: observable,
      search: computed,
      page: computed,
      setSearch: action,
      setPage: action,
    });
  }

  get search(): string {
    return this._search;
  }

  get page(): number {
    return this._page;
  }

  setSearch(search: string) {
    if (this._search !== search) {
      this._search = search;
    }
  }

  setPage(page: number) {
    if (this._page !== page) {
      this._page = page;
    }
  }
}
