import { makeObservable, observable, action, computed, runInAction } from 'mobx';

import FoodService from 'services/FoodService';

import { ISingleRecipe, ILocalStore, DataType } from 'types/entities';
import { getTestRecipe } from 'utils/getTestRecipe';

import { Meta } from 'utils/meta';

type PrivateFields = '_recipe' | '_meta' | '_error';

export default class SingleRecipeStore implements ILocalStore {
  private readonly _foodService = new FoodService();

  private _recipe: ISingleRecipe | null = null;
  private _meta: Meta = Meta.loading;
  private _error: Error | null = null;

  // Логика по переключению режима получения данных ('mock' | 'api')
  private _dataType: DataType = 'mock';

  constructor() {
    makeObservable<SingleRecipeStore, PrivateFields>(this, {
      _recipe: observable.ref,
      _meta: observable,
      _error: observable,
      recipe: computed,
      meta: computed,
      error: computed,
      getRecipesListData: action,
      destroy: action,
    });
  }

  get recipe(): ISingleRecipe | null {
    return this._recipe;
  }

  get meta(): Meta {
    return this._meta;
  }

  get error(): Error | null {
    return this._error;
  }

  async getRecipesListData(id: string) {
    this._meta = Meta.loading;
    this._recipe = null;

    if (this._dataType === 'mock') {
      const rawRecipeData = getTestRecipe();

      const recipeData = this._foodService._transformSingleRecipeData(rawRecipeData);
      this._meta = Meta.success;
      this._recipe = recipeData;
    }

    if (this._dataType === 'api') {
      try {
        const recipeData = await this._foodService.getRecipeById(id);

        runInAction(() => {
          this._meta = Meta.success;
          this._recipe = recipeData;
        });
      } catch (error) {
        this._meta = Meta.error;
        this._error = error instanceof Error ? error : new Error('An unknown error occurred');
      }
    }
  }

  destroy(): void {
    this._recipe = null;
    this._meta = Meta.initial;
    this._error = null;
  }
}
