import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import history from './history';
import Main from './pages/Main';
import RecoilMain from './pages/RecoilPage/RecoilMain';
import ReduxMain from './pages/ReduxPage/ReduxMain';

const Router = () => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/redux/*" element={<ReduxMain />} />
        <Route path="/recoil/*" element={<RecoilMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
