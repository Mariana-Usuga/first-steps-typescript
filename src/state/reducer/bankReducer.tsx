/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable default-param-last */
import { ActionTypes } from '../types/bankTypes';
import { Action } from '../../interfaces/Bank';

const initialState = 0;

const bankReducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.DEPOSIT:
      return state + action.payload;
    case ActionTypes.WITHDRAW:
      return state - action.payload;
    case ActionTypes.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default bankReducer;
