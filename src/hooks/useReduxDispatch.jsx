import { useContext } from 'react';
import ReduxContext from '../contexts/ReduxContext';

export const useReduxDispatch = () => {
  const store = useContext(ReduxContext);

  return store.dispatch;
};
