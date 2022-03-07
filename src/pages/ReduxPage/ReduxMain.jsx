import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Todos from './Todos';
import Users from './Users';

const ReduxMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default ReduxMain;
