import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import store from './redux/store';
import { Provider } from 'react-redux';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <>
    <GlobalStyle />
    {/* <Provider store={store}> */}
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </RecoilRoot>
    {/* </Provider> */}
  </>,
  document.getElementById('root')
);
