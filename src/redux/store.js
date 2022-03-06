import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, promise))
);

export default store;
