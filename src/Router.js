import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecoilMain from './pages/RecoilPage/RecoilMain';
import ReduxMain from './pages/ReduxPage/ReduxMain';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReduxMain />} />
        <Route path="/recoil" element={<RecoilMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
