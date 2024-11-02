import classNames from 'classnames';
import React from 'react';

import Text from '../Text';

import './Card.scss';

export type CardProps = {
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
  const cardClasses = classNames('card', className);

  return (
    <div className={cardClasses} onClick={onClick}>
      <div className="card-image-container">
        <img src={image} alt={title?.toString()} className="card-img" />
      </div>

      <div className="card-content">
        <div className="card-body">
          {captionSlot && (
            <Text className="card-caption" view="p-14" color="secondary" weight="medium">
              {captionSlot}
            </Text>
          )}

          <Text className="card-title" tag="h3" view="p-20" maxLines={2} weight="medium">
            {title}
          </Text>
          <Text className="card-subtitle" view="p-16" color="secondary" maxLines={3}>
            {subtitle}
          </Text>
        </div>

        <div className="card-footer">
          {contentSlot && (
            <Text className="card-content-slot" tag="div" view="p-18" weight="bold">
              {contentSlot}
            </Text>
          )}
          {actionSlot && <div className="card-action-slot">{actionSlot}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
