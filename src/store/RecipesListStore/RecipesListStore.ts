import { makeObservable, observable, action, computed, runInAction } from 'mobx';

import { appDataType } from 'config/appConfig';

import FoodService from 'services/FoodService';

import rootStore from 'store/RootStore';

import { IRecipeListItem, ILocalStore } from 'types/entities';
import { Meta } from 'utils/enums';
import { getPages, getStringifiedFilterOptions } from 'utils/helpers';
import { getTestRecipes } from 'utils/testDataProviders';

type PrivateFields = '_list' | '_meta' | '_error' | '_pages';

export default class RecipesListStore implements ILocalStore {
  private readonly _foodService = new FoodService();

  private _list: IRecipeListItem[] = [];
  private _meta: Meta = Meta.loading;
  private _error: Error | null = null;
  private _pages: number = 1;

  constructor() {
    makeObservable<RecipesListStore, PrivateFields>(this, {
      _list: observable.ref,
      _meta: observable,
      _error: observable,
      _pages: observable,
      list: computed,
      meta: computed,
      error: computed,
      pages: computed,
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

  get pages(): number {
    return this._pages;
  }

  async getRecipesListData() {
    this._meta = Meta.loading;
    this._list = [];

    if (appDataType === 'mock') {
      const rawRecipeData = getTestRecipes();

      const recipesData = this._foodService._transfrormPaginatedRecipesData(rawRecipeData);

      this._meta = Meta.success;
      this._list = recipesData.list;
      this._pages = getPages(recipesData.totalResults);
    }

    if (appDataType === 'api') {
      try {
        const { name, page, type } = rootStore.query;

        const pageNumber = Number(page);
        const stringifiedType = getStringifiedFilterOptions(type);

        const recipesData = await this._foodService.getRecipes(name, pageNumber, stringifiedType);

        runInAction(() => {
          this._meta = Meta.success;
          this._list = recipesData.list;
          this._pages = getPages(recipesData.totalResults);
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
