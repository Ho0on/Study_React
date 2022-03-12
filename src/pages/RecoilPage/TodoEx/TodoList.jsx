import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../../../recoil/TodoStore';
import TodoItem from './TodoItem';
import TodoListCreator from './TodoListCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoListCreator />
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
