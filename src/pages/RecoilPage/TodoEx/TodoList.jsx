import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../../../recoil/TodoStore';
import TodoItem from './TodoItem';
import TodoListCreator from './TodoListCreator';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoListCreator />

      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
