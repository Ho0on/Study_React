import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from './types';

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
