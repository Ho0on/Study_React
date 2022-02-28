import React from 'react';
import { addTodo, showComplete } from '../../redux/action/actions';
import store from '../../redux/store';

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addTodo('dodo'));
store.dispatch(showComplete());

const ReduxMain = () => {
  return <div>ReduxMain</div>;
};

export default ReduxMain;
