import React from 'react';

import Button from 'components/Button';
import Card from 'components/Card';
import AlarmClockIcon from 'components/icons/AlarmClockIcon';

import { IRecipeListItem } from 'utils/types';

import styles from './RecipesList.module.scss';

interface RecipesListProps {
  recipesList: IRecipeListItem[];
}

const RecipesList: React.FC<RecipesListProps> = ({ recipesList }) => {
  const renderCards = (recipeListItems: IRecipeListItem[]) => {
    const cards = recipeListItems.map((recipeListItem) => {
      const { id, title, imageSrc, cookingMinutes, ingredients, nutrition } = recipeListItem;

      const captionSlot = (
        <div className={styles['recipes-list__caption-slot']}>
          <AlarmClockIcon className={styles['recipes-list__alarm-clock']} />
          {`${cookingMinutes} minutes`}
        </div>
      );

      const subtitle = ingredients.join(' + ');

      const contentSlot = `${nutrition} kcal`;

      const actionSlot = <Button>Save</Button>;

      return (
        <Card
          className={styles['recipes-list__item']}
          key={id}
          captionSlot={captionSlot}
          title={title}
          image={imageSrc}
          subtitle={subtitle}
          contentSlot={contentSlot}
          actionSlot={actionSlot}
        />
      );
    });

    return cards;
  };

  const cards = renderCards(recipesList);

  return <div className={styles['recipes-list__items']}>{cards}</div>;
};

export default RecipesList;