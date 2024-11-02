import axios from 'axios';

import { IRecipeListItem } from 'utils/types';

type RecipesData = {
  number: number;
  offset: number;
  results: IRecipeListItem[];
  totalResults: number;
};

class FoodService {
  _apiBaseUrl = 'https://api.spoonacular.com/recipes';
  _apiKey = '727688aee1234493b060d3fad825adb8';

  getResource = async (url: string): Promise<RecipesData> => {
    const response = await axios({
      method: 'get',
      url,
    });

    if (response.status !== 200) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return response.data;
  };

  getRecipes = async () => {
    const requestUrl = `${this._apiBaseUrl}/complexSearch?apiKey=${this._apiKey}`;
    const data = await this.getResource(requestUrl);
    const results = data.results;

    return results;
  };

  getRecipeById = async (id: number) => {
    const requestUrl = `${this._apiBaseUrl}/${id}/information?apiKey=${this._apiKey}`;
    const data = await this.getResource(requestUrl);

    return data;
  };
}

export default FoodService;
