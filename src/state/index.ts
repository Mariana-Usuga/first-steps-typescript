/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer/index';

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk),
);

export default store;
