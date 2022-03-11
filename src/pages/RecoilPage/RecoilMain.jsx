import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import TodoList from './TodoEx/TodoList';

const RecoilMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todoEx" element={<TodoList />} />
      {/* <Route path="/todoCal" element={<Users />} /> */}
    </Routes>
  );
};

export default RecoilMain;
