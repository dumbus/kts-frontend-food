import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/Button';
import Card from 'components/Card';
import NothingFound from 'components/NothingFound';
import AlarmClockIcon from 'components/icons/AlarmClockIcon';

import { ROUTES } from 'config/routes';
import { IRecipeListItem } from 'types/entities';

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
          {cookingMinutes} minutes
        </div>
      );

      const subtitle = ingredients.join(' + ');

      const contentSlot = `${Math.round(nutrition)} kcal`;

      const actionSlot = <Button>Save</Button>;

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

export default RecipesList;
