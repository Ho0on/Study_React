import { SHOW_ALL, SHOW_COMPLETE } from '../action/types';

const initialState = 'ALL';

const filter = (previousState = initialState, action) => {
  switch (action.type) {
    case SHOW_COMPLETE:
      return 'COMPLETE';

    case SHOW_ALL:
      return 'ALL';

    default:
      return previousState;
  }
};

export default filter;
