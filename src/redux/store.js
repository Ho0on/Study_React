import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import history from '../history';
import reducer from './modules/reducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({ history }),
      promise,
      sagaMiddleware
    )
  )
);
sagaMiddleware.run(rootSaga);

export default store;
