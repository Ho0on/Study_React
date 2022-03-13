import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './Home';
import TodoList from './TodoEx/TodoList';

const RecoilMain = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoEx" element={<TodoList />} />
        {/* <Route path="/todoCal" element={<Users />} /> */}
      </Routes>
    </RecoilRoot>
  );
};

export default RecoilMain;
