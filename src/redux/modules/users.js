// 액션 타입 정의

import axios from 'axios';

// 깃헙 API 호출을 시작하는 것을 의미
const GET_USERS_START = 'study_react/users/GET_USERS_START';

// 깃헙 API 호출에 대한 응답이 성공적으로 돌아온 경우
const GET_USERS_SUCCESS = 'study_react/users/GET_USERS_SUCCESS';

// 깃헙 API 호출에 대한 응답이 성공적으로 돌아온 경우
const GET_USERS_FAIL = 'study_react/users/GET_USERS_FAIL';

// redux promise
const GET_USERS = 'study_react/users/GET_USERS';
const GET_USERS_PENDING = 'study_react/users/GET_USERS_PENDING';
const GET_USERS_FULFILLED = 'study_react/users/GET_USERS_FULFILLED';
const GET_USERS_REJECTED = 'study_react/users/GET_USERS_REJECTED';

// 액션 생성 함수
export const getUsersStart = () => {
  return { type: GET_USERS_START };
};

export const getUsersSuccess = data => {
  return { type: GET_USERS_SUCCESS, data };
};

export const getUsersFail = error => {
  return { type: GET_USERS_FAIL, error };
};

// redux-thunk
export const getUsersThunk = () => {
  return async dispatch => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
};

// redux-promise-middleware
export const getUsersPromise = () => {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get('https://api.github.com/users');
      return res.data;
    },
  };
};

// 초기값
const initialState = { loading: false, data: [], error: null };

// 리듀서
const reducer = (state = initialState, action) => {
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

export default reducer;
