import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/Button';
import Card from 'components/Card';
import NothingFound from 'components/NothingFound';
import Text from 'components/Text';
import AlarmClockIcon from 'components/icons/AlarmClockIcon';

import { ROUTES } from 'config/routes';

import rootStore from 'store/RootStore';

import { IRecipeListItem } from 'types/entities';
import Labels from '../Labels';

import styles from './RecipesList.module.scss';

interface RecipesListProps {
  recipesList: IRecipeListItem[];
}

const RecipesList: React.FC<RecipesListProps> = ({ recipesList }) => {
  const renderCards = (recipeListItems: IRecipeListItem[]) => {
    const cards = recipeListItems.map((recipeListItem) => {
      const { id, title, imageSrc, readyInMinutes, ingredients, nutrition, dishTypes } = recipeListItem;

      const captionSlot = (
        <div className={styles['recipes-list__caption-slot']}>
          <AlarmClockIcon className={styles['recipes-list__alarm-clock']} />
          {readyInMinutes} minutes
        </div>
      );

      const ingredientsText = ingredients.join(' + ');

      const subtitle = (
        <div className={styles['recipes-list__subtitle']}>
          <Text>{ingredientsText}</Text>
          <Labels labelsData={dishTypes} />
        </div>
      );

      const contentSlot = `${Math.round(nutrition)} kcal`;

      const actionSlot = (
        <Button
          onClick={(e) => {
            e.preventDefault();

            rootStore.localStore.toggleFavorite(id);
          }}
        >
          {rootStore.localStore.favoritesIds.includes(id) ? 'Unsave' : 'Save'}
        </Button>
      );

      return (
        <Link to={ROUTES.recipesDetail(id)} key={id}>
          <Card
            className={styles['recipes-list__item']}
            captionSlot={captionSlot}
            title={title}
            image={imageSrc}
            subtitle={subtitle}
            contentSlot={contentSlot}
            actionSlot={actionSlot}
            isLiked={rootStore.localStore.favoritesIds.includes(id)}
          />
        </Link>
      );
    });

    return cards;
  };

  const cards = renderCards(recipesList);
  const isEmpty = !cards.length;

  const className = classNames(styles['recipes-list__items'], {
    [styles['recipes-list__empty']]: isEmpty,
  });

  return <div className={className}>{isEmpty ? <NothingFound withImage /> : cards}</div>;
};

export default observer(RecipesList);
