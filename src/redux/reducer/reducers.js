import { ADD_TODO } from '../action/types';

const initialState = [];

const todoApp = (previousState = initialState, action) => {
  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }

  return previousState;
};
