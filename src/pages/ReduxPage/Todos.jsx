import React from 'react';
import TodoListContainer from '../../containers/TodoListContainer';
import TodoFormContainer from '../../containers/TodoFormContainer';

const Todos = () => {
  return (
    <div>
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
};

export default Todos;
