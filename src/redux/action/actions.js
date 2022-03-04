import {
  ADD_TODO,
  COMPLETE_TODO,
  GET_USERS_FAIL,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  SHOW_ALL,
  SHOW_COMPLETE,
} from './types';

export const addTodo = text => {
  return { type: ADD_TODO, text };
};

export const completeTodo = index => {
  return { type: COMPLETE_TODO, index };
};

export const showAll = () => {
  return { type: SHOW_ALL };
};

export const showComplete = () => {
  return { type: SHOW_COMPLETE };
};

export const getUsersStart = () => {
  return { type: GET_USERS_START };
};

export const getUsersSuccess = data => {
  return { type: GET_USERS_SUCCESS, data };
};

export const getUsersFail = error => {
  return { type: GET_USERS_FAIL, error };
};
