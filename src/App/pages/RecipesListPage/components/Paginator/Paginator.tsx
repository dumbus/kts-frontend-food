import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';

import ArrowSideIcon from 'components/icons/ArrowSideIcon';

import useSearchQuery from 'hooks/useSearchQuery';
import rootStore from 'store/RootStore';

import SmallButton from '../SmallButton';

import styles from './Paginator.module.scss';

interface PaginatorProps {
  pages: number;
}

const Paginator: React.FC<PaginatorProps> = ({ pages }) => {
  const setSearchQuery = useSearchQuery();

  const page = rootStore.query.page ? Number(rootStore.query.page) : 1;

  const onPageSwitch = (newPage: number) => {
    runInAction(() => {
      setSearchQuery({ page: newPage }, true);
    });
  };

  const renderCenterButtons = (page: number, pages: number) => {
    const buttons = [];
    let first, last;

    if (pages <= 5) {
      first = 1;
      last = pages;
    } else if (page <= 3) {
      first = 1;
      last = 3;
    } else if (page <= pages - 3) {
      first = page - 1;
      last = page + 1;
    } else {
      first = pages - 2;
      last = pages;
    }

    for (let i = first; i <= last; i++) {
      buttons.push(
        <SmallButton key={i} onClick={() => onPageSwitch(i)} active={i === page}>
          {i}
        </SmallButton>,
      );
    }

    return buttons;
  };

  return (
    <div className={styles['paginator']}>
      {pages > 0 && (
        <div className={styles['paginator__container']}>
          <SmallButton onClick={() => onPageSwitch(page - 1)} disabled={page <= 1}>
            <ArrowSideIcon color={page === 1 ? 'secondary' : 'primary'} side="left" />
          </SmallButton>

          {page > 3 && pages > 5 && (
            <div className={styles['paginator__limit']}>
              <SmallButton onClick={() => onPageSwitch(1)}>1</SmallButton>
              <div className={styles['paginator__dots']}>...</div>
            </div>
          )}

          {renderCenterButtons(page, pages)}

          {page < pages - 2 && pages > 5 && (
            <div className={styles['paginator__limit']}>
              <div className={styles['paginator__dots']}>...</div>
              <SmallButton onClick={() => onPageSwitch(pages)}>{pages}</SmallButton>
            </div>
          )}

          <SmallButton onClick={() => onPageSwitch(page + 1)} disabled={page >= pages}>
            <ArrowSideIcon color={page === pages ? 'secondary' : 'primary'} side="right" />
          </SmallButton>
        </div>
      )}
    </div>
  );
};

export default observer(Paginator);
