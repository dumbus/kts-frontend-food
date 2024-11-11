import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const setQueryParams = useCallback(
    (key: string, value: string | null, needReload = false) => {
      const params = new URLSearchParams(location.search);

      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      const newUrl = params.size > 0 ? `${location.pathname}?${params.toString()}` : location.pathname;

      if (needReload) {
        navigate(newUrl);
      } else {
        window.history.replaceState(null, '', newUrl);
      }
    },
    [location, navigate],
  );

  return setQueryParams;
};

export default useQueryParams;
