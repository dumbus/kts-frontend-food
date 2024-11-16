import classNames from 'classnames';
import React from 'react';

import Text from '../Text';

import styles from './Card.module.scss';

type CardProps = {
  /** Дополнительный classname */
  className?: string;
  /** URL изображения */
  image: string;
  /** Слот над заголовком */
  captionSlot?: React.ReactNode;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Описание карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  contentSlot?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
  /** Слот для действия */
  actionSlot?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  className,
  image,
  captionSlot,
  title,
  subtitle,
  contentSlot,
  onClick,
  actionSlot,
}) => {
  const cardClasses = classNames(styles['card'], className);

  return (
    <div className={cardClasses} onClick={onClick}>
      <div className={styles['card-image-container']}>
        <img src={image} alt={title?.toString()} className={styles['card-img']} />
      </div>

      <div className={styles['card-content']}>
        <div className={styles['card-body']}>
          {captionSlot && (
            <Text className={styles['card-caption']} view="p-14" color="secondary" weight="medium" tag="div">
              {captionSlot}
            </Text>
          )}

          <Text className={styles['card-title']} tag="h3" view="p-20" maxLines={2} weight="medium">
            {title}
          </Text>
          <Text className={styles['card-subtitle']} view="p-16" color="secondary" maxLines={3}>
            {subtitle}
          </Text>
        </div>

        <div className={styles['card-footer']}>
          {contentSlot && (
            <Text className={styles['card-content-slot']} tag="div" view="p-18" weight="bold" color="accent">
              {contentSlot}
            </Text>
          )}
          {actionSlot && <div className={styles['card-action-slot']}>{actionSlot}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
