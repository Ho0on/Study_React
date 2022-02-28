import { ADD_TODO, COMPLETE_TODO } from '../action/types';

const initialState = [];

const todos = (previousState = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...previousState, { text: action.text, done: false }];

    case COMPLETE_TODO:
      return previousState.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, done: true };
        }
        return todo;
      });

    default:
      return previousState;
  }
};

export default todos;
