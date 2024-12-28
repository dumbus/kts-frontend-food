import LocalStorageStore from './LocalStorageStore';
import QueryParamsStore from './QueryParamsStore';

export default class RootStore {
  readonly query = new QueryParamsStore();
  readonly localStore = new LocalStorageStore();
}
