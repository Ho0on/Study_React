import React, { useRef } from 'react';
import { useReduxDispatch } from '../../hooks/useReduxDispatch';
import { addTodo } from '../../redux/action/actions';

const TodoForm = () => {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();

  const click = () => {
    dispatch(addTodo(inputRef.current.value));
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );
};

export default TodoForm;
