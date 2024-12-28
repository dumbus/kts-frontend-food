import { makeObservable, observable, action, computed, runInAction } from 'mobx';

import { appDataType } from 'config/appConfig';

import FoodService from 'services/FoodService';

import { ISingleRecipe, ILocalStore, PageType } from 'types/entities';
import { Meta } from 'utils/enums';
import { getTestRecipe } from 'utils/testDataProviders';

type PrivateFields = '_recipe' | '_meta' | '_error';

export default class SingleRecipeStore implements ILocalStore {
  private readonly _foodService = new FoodService();

  private _recipe: ISingleRecipe | null = null;
  private _meta: Meta = Meta.loading;
  private _error: Error | null = null;

  constructor() {
    makeObservable<SingleRecipeStore, PrivateFields>(this, {
      _recipe: observable.ref,
      _meta: observable,
      _error: observable,
      recipe: computed,
      meta: computed,
      error: computed,
      getRecipeData: action,
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

  async getRecipeData(pageType: PageType, id: string) {
    this._meta = Meta.loading;
    this._recipe = null;

    if (appDataType === 'mock') {
      const rawRecipeData = getTestRecipe();

      const recipeData = this._foodService._transformSingleRecipeData(rawRecipeData);
      this._meta = Meta.success;
      this._recipe = recipeData;
    }

    if (appDataType === 'api') {
      try {
        let recipeData = null;

        if (pageType === 'single') {
          recipeData = await this._foodService.getRecipeById(id);
        }

        if (pageType === 'random') {
          recipeData = await this._foodService.getRandomRecipe();
        }

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
