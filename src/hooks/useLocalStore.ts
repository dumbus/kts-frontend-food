import { useRef, useEffect } from 'react';

import { ILocalStore } from 'types/entities';

const useLocalStore = <T extends ILocalStore>(creator: () => T): T => {
  const container = useRef<null | T>(null);
  if (container.current === null) {
    container.current = creator();
  }

  useEffect(() => {
    return () => container.current?.destroy();
  }, []);

  return container.current;
};

export default useLocalStore;
