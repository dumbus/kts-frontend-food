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

import { IFavoriteItem } from 'types/entities';

import Labels from '../Labels';

import styles from './FavoritesList.module.scss';

interface FavoritesProps {
  favoritesList: IFavoriteItem[];
}

const FavoritesList: React.FC<FavoritesProps> = ({ favoritesList }) => {
  const renderCards = (favoritesListItems: IFavoriteItem[]) => {
    const cards = favoritesListItems.map((favoritesListItem) => {
      const { id, title, imageSrc, cookingMinutes, ingredients, dishTypes } = favoritesListItem;

      const ingredientsText = ingredients.join(' + ');

      const captionSlot = (
        <div className={styles['favorites-list__caption-slot']}>
          <AlarmClockIcon className={styles['favorites-list__alarm-clock']} />
          {cookingMinutes} minutes
        </div>
      );

      const subtitle = (
        <div className={styles['favorites-list__subtitle']}>
          <Text>{ingredientsText}</Text>
          <Labels labelsData={dishTypes} />
        </div>
      );

      const actionSlot = (
        <Button
          onClick={(e) => {
            e.preventDefault();

            rootStore.localStore.toggleFavorite(id);
          }}
        >
          Unsave
        </Button>
      );

      return (
        <Link to={ROUTES.recipesDetail(id)} key={id}>
          <Card
            className={styles['favorites-list__item']}
            captionSlot={captionSlot}
            title={title}
            image={imageSrc}
            subtitle={subtitle}
            actionSlot={actionSlot}
            isLiked={rootStore.localStore.favoritesIds.includes(id)}
          />
        </Link>
      );
    });

    return cards;
  };

  const cards = renderCards(favoritesList);
  const isEmpty = !cards.length;

  const className = classNames(styles['favorites-list__items'], {
    [styles['favorites-list__empty']]: isEmpty,
  });

  return <div className={className}>{isEmpty ? <NothingFound withImage /> : cards}</div>;
};

export default observer(FavoritesList);
