import classNames from 'classnames';
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
  color?: 'primary' | 'secondary' | 'accent' | 'error';
  /** Максимальное кол-во строк */
  maxLines?: number;
};

const Text: React.FC<TextProps> = ({ className = '', view, tag: Tag = 'p', weight, children, color, maxLines }) => {
  const textClasses = classNames(className, styles['text'], {
    [styles[`text-${view}`]]: view,
    [styles[`text-weight-${weight}`]]: weight,
    [styles[`text-color-${color}`]]: color,
  });

  const style: React.CSSProperties = maxLines
    ? {
        display: '-webkit-box',
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }
    : {};

  return (
    <Tag className={textClasses} style={style}>
      {children}
    </Tag>
  );
};

export default Text;
