import { reaction, runInAction } from 'mobx';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import rootStore from 'store/RootStore';

import { IQueryParams } from 'types/entities';

const useSearchQuery = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const disposer = reaction(
      () => [rootStore.query.query, rootStore.query.reload],
      ([query, reload]) => {
        const newUrl = query ? `${location.pathname}?${query}` : location.pathname;

        if (reload) {
          runInAction(() => {
            rootStore.query.setReload(false);
          });

          navigate(newUrl, { state: { noTransition: true } });
        } else {
          window.history.replaceState({}, '', newUrl);
        }
      },
    );

    return () => disposer();
  }, [location, navigate]);

  const setSearchQuery = (newParams: IQueryParams, needReload = false) => {
    runInAction(() => {
      rootStore.query.setParams(newParams, needReload);
    });
  };

  return setSearchQuery;
};

export default useSearchQuery;
