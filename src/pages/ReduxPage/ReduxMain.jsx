import React from 'react';
import TodoFormContainer from '../../containers/TodoFormContainer';
import TodoListContainer from '../../containers/TodoListContainer';

const ReduxMain = () => {
  return (
    <div>
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
};

export default ReduxMain;
