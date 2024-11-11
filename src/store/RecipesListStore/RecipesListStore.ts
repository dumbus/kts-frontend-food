import { makeObservable, observable, action, computed, runInAction, IReactionDisposer, reaction } from 'mobx';

import FoodService from 'services/FoodService';

import rootStore from 'store/RootStore';

import { IRecipeListItem, ILocalStore, DataType } from 'types/entities';
import { getPages } from 'utils/getPages';
import { getTestRecipes } from 'utils/getTestRecipes';

import { Meta } from 'utils/meta';

type PrivateFields = '_list' | '_meta' | '_error' | '_pages';

export default class RecipesListStore implements ILocalStore {
  private readonly _foodService = new FoodService();

  private _list: IRecipeListItem[] = [];
  private _meta: Meta = Meta.loading;
  private _error: Error | null = null;
  private _pages: number = 1;

  // Логика по переключению режима получения данных ('mock' | 'api')
  private _dataType: DataType = 'mock';

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

  get dataType(): DataType {
    return this._dataType;
  }

  async getRecipesListData() {
    this._meta = Meta.loading;
    this._list = [];

    if (this._dataType === 'mock') {
      const rawRecipeData = getTestRecipes();

      const recipesData = this._foodService._transfrormPaginatedRecipesData(rawRecipeData);

      this._meta = Meta.success;
      this._list = recipesData.list;
      this._pages = getPages(recipesData.totalResults);
    }

    if (this._dataType === 'api') {
      try {
        const { search, page } = rootStore.query;

        const recipesData = await this._foodService.getRecipes(search, page);

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

  private readonly _pageReaction: IReactionDisposer = reaction(
    () => rootStore.query.page,
    () => {
      this.getRecipesListData();
    },
  );

  destroy(): void {
    this._list = [];
    this._meta = Meta.initial;
    this._error = null;
    this._pageReaction();
  }
}
