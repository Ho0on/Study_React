import {
  GET_USERS_FAIL,
  GET_USERS_START,
  GET_USERS_SUCCESS,
} from '../action/types';

const initialState = { loading: false, data: [], error: null };

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START:
      return { ...state, loading: true, error: null };

    case GET_USERS_SUCCESS:
      return { ...state, loading: false, data: action.data };

    case GET_USERS_FAIL:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default users;
