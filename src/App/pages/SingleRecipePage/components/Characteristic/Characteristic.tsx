import React from 'react';

import imageTemplate from 'assets/recipe-image-template.jpg';

import Text from 'components/Text';

import styles from './Characteristic.module.scss';

type CharacteristicProps = {
  title: string;
  image: string;
  preparationMinutes: number;
  cookingMinutes: number;
  totalMinutes: number;
  aggregateLikes: number;
  servings: number;
};

const Characteristic: React.FC<CharacteristicProps> = ({
  title,
  image,
  preparationMinutes,
  cookingMinutes,
  totalMinutes,
  aggregateLikes,
  servings,
}) => {
  const imageSrc = image.length ? image : imageTemplate;

  return (
    <div className={styles['characteristic']}>
      <img className={styles['characteristic__image']} src={imageSrc} alt={title} />

      <div className={styles['characteristic__list']}>
        <div className={styles['characteristic__item']}>
          <Text view="p-16">Preparation</Text>
          <Text view="p-16" weight="bold" color="accent">
            {preparationMinutes} minutes
          </Text>
        </div>

        <div className={styles['characteristic__item']}>
          <Text view="p-16">Cooking</Text>
          <Text view="p-16" weight="bold" color="accent">
            {cookingMinutes} minutes
          </Text>
        </div>

        <div className={styles['characteristic__item']}>
          <Text view="p-16">Total</Text>
          <Text view="p-16" weight="bold" color="accent">
            {totalMinutes} minutes
          </Text>
        </div>

        <div className={styles['characteristic__item']}>
          <Text view="p-16">Ratings</Text>
          <Text view="p-16" weight="bold" color="accent">
            {aggregateLikes} likes
          </Text>
        </div>

        <div className={styles['characteristic__item']}>
          <Text view="p-16">Servings</Text>
          <Text view="p-16" weight="bold" color="accent">
            {servings} servings
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Characteristic;
