/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { combineReducers } from 'redux';
import bankReducer from './bankReducer';

const reducers = combineReducers({
  bank: bankReducer,
});

export default reducers;