import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import store from '../../redux/store';
import Home from './Home';
import Todos from './Todos';
import Users from './Users';

const ReduxMain = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Provider>
  );
};

export default ReduxMain;
