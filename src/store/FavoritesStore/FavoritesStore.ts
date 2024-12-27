import { makeObservable, observable, action, computed, runInAction } from 'mobx';

import { appDataType } from 'config/appConfig';

import FoodService from 'services/FoodService';

import { IFavoriteItem, ILocalStore } from 'types/entities';
import { Meta } from 'utils/enums';
import { getTestFavourites } from 'utils/testDataProviders/getTestFavourites';

type PrivateFields = '_list' | '_meta' | '_error';

export default class FavoritesStore implements ILocalStore {
  private readonly _foodService = new FoodService();

  private _list: IFavoriteItem[] = [];
  private _meta: Meta = Meta.loading;
  private _error: Error | null = null;

  constructor() {
    makeObservable<FavoritesStore, PrivateFields>(this, {
      _list: observable.ref,
      _meta: observable,
      _error: observable,
      list: computed,
      meta: computed,
      error: computed,
      getRecipesListData: action,
      destroy: action,
    });
  }

  get list(): IFavoriteItem[] {
    return this._list;
  }

  get meta(): Meta {
    return this._meta;
  }

  get error(): Error | null {
    return this._error;
  }

  async getRecipesListData(favoritesIds: number[]) {
    this._meta = Meta.loading;
    this._list = [];

    if (appDataType === 'mock') {
      const rawFavoritesData = getTestFavourites();

      const favoritesData = this._foodService._transformFavouritesData(rawFavoritesData);

      this._meta = Meta.success;
      this._list = favoritesData;
    }

    if (appDataType === 'api') {
      try {
        const favoritesData = await this._foodService.getFavorites(favoritesIds);

        runInAction(() => {
          this._meta = Meta.success;
          this._list = favoritesData;
        });
      } catch (error) {
        this._meta = Meta.error;
        this._error = error instanceof Error ? error : new Error('An unknown error occurred');
      }
    }
  }

  destroy(): void {
    this._list = [];
    this._meta = Meta.initial;
    this._error = null;
  }
}
