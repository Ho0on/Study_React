import {
  GET_USERS_FAIL,
  GET_USERS_FULFILLED,
  GET_USERS_PENDING,
  GET_USERS_REJECTED,
  GET_USERS_START,
  GET_USERS_SUCCESS,
} from '../action/types';

const initialState = { loading: false, data: [], error: null };

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START || GET_USERS_PENDING:
      return { ...state, loading: true, error: null };

    case GET_USERS_SUCCESS:
      return { ...state, loading: false, data: action.data };

    case GET_USERS_FULFILLED:
      return { ...state, loading: false, data: action.payload };

    case GET_USERS_FAIL:
      return { ...state, loading: false, error: action.error };

    case GET_USERS_REJECTED:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default users;
