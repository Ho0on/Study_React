// 액션 타입 정의
const ADD_TODO = 'study_react/todos/ADD_TODO';
const COMPLETE_TODO = 'study_react/todos/COMPLETE_TODO';

// 액션 생성 함수
export const addTodo = text => {
  return { type: ADD_TODO, text };
};

export const completeTodo = index => {
  return { type: COMPLETE_TODO, index };
};

// 초기값
const initialState = [];

//리듀서
const reducer = (previousState = initialState, action) => {
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

export default reducer;
