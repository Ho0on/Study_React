import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import TodoForm from '../pages/ReduxPage/TodoForm';
import { addTodo } from '../redux/action/actions';

// const TodoFormContainer = connect(
//   state => ({}),
//   dispatch => ({
//     add: text => {
//       dispatch(addTodo(text));
//     },
//   })
// )(TodoForm);

const TodoFormContainer = () => {
  const dispatch = useDispatch();

  const add = useCallback(
    text => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  return <TodoForm add={add} />;
};

export default TodoFormContainer;
