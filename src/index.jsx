import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import ReduxContext from './contexts/ReduxContext';
import store from './redux/store';

import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ReduxContext.Provider value={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ReduxContext.Provider>
  </>,
  document.getElementById('root')
);
