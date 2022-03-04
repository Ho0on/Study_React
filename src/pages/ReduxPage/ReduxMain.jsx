import React from 'react';
import TodoFormContainer from '../../containers/TodoFormContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import UserListContainer from '../../containers/UserListContainer';

const ReduxMain = () => {
  return (
    <div>
      <UserListContainer />
      <TodoFormContainer />
      <TodoListContainer />
    </div>
  );
};

export default ReduxMain;
