import * as React from 'react';

import styles from './Text.module.scss';

type TextProps = {
  /** Дополнительный класс */
  className?: string;
  /** Стиль отображения */
  view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
  /** Html-тег */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
  /** Начертание шрифта */
  weight?: 'normal' | 'medium' | 'bold';
  /** Контент */
  children: React.ReactNode;
  /** Цвет */
  color?: 'primary' | 'secondary' | 'accent';
  /** Максимальное кол-во строк */
  maxLines?: number;
};

const Text: React.FC<TextProps> = ({ className = '', view, tag: Tag = 'p', weight, children, color, maxLines }) => {
  const classes = [
    styles['text'],
    view ? styles[`text-${view}`] : '',
    weight ? styles[`text-weight-${weight}`] : '',
    color ? styles[`text-color-${color}`] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = maxLines
    ? {
        display: '-webkit-box',
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }
    : {};

  return (
    <Tag className={classes} style={style}>
      {children}
    </Tag>
  );
};

export default Text;
