import { makeObservable, observable, action, computed, runInAction } from 'mobx';

import FoodService from 'services/FoodService';

import { IRecipeListItem, ILocalStore, DataType } from 'types/entities';
import { getTestRecipes } from 'utils/getTestRecipes';

import { Meta } from 'utils/meta';

type PrivateFields = '_list' | '_meta' | '_error';

export default class RecipesListStore implements ILocalStore {
  private readonly _foodService = new FoodService();

  private _list: IRecipeListItem[] = [];
  private _meta: Meta = Meta.loading;
  private _error: Error | null = null;

  constructor() {
    makeObservable<RecipesListStore, PrivateFields>(this, {
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

  get list(): IRecipeListItem[] {
    return this._list;
  }

  get meta(): Meta {
    return this._meta;
  }

  get error(): Error | null {
    return this._error;
  }

  async getRecipesListData(dataType: DataType) {
    this._meta = Meta.loading;
    this._list = [];

    if (dataType === 'mock') {
      const rawRecipeData = getTestRecipes();

      const recipes = this._foodService._transformRecipeListData(rawRecipeData);
      this._meta = Meta.success;
      this._list = recipes;
    }

    if (dataType === 'api') {
      try {
        const recipes = await this._foodService.getRecipes();

        runInAction(() => {
          this._meta = Meta.success;
          this._list = recipes;
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
