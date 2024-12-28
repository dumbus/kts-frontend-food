import { makeObservable, observable, computed, action } from 'mobx';

type PrivateFields = '_favoritesIds' | 'loadFavorites';

export default class LocalStorageStore {
  private _favoritesIds: number[] = [];

  constructor() {
    makeObservable<LocalStorageStore, PrivateFields>(this, {
      _favoritesIds: observable,
      favoritesIds: computed,
      toggleFavorite: action,
      loadFavorites: action,
    });

    this.loadFavorites();
  }

  get favoritesIds(): number[] {
    return this._favoritesIds;
  }

  toggleFavorite(id: number): void {
    if (this._favoritesIds.includes(id)) {
      this._favoritesIds = this._favoritesIds.filter((favoriteId) => favoriteId !== id);
    } else {
      this._favoritesIds.push(id);
    }

    this.saveFavorites();
  }

  private loadFavorites(): void {
    const storedFavorites = localStorage.getItem('favoritesIds');
    if (storedFavorites) {
      this._favoritesIds = JSON.parse(storedFavorites);
    }
  }

  private saveFavorites(): void {
    localStorage.setItem('favoritesIds', JSON.stringify(this._favoritesIds));
  }
}
