/* eslint-disable no-case-declarations */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable default-param-last */
import { ActionTypes } from '../types/bankTypes';
import { Action } from '../../interfaces/Bank';

const initialState = 0;

const bankReducer = (state: number = initialState, action: Action) => {
  console.log('action paylos', typeof action.payload);
  switch (action.type) {
    case ActionTypes.DEPOSIT:
      const nose = state + action.payload;
      console.log('nose ', nose);
      return nose;
    case ActionTypes.WITHDRAW:
      if (state - action.payload < 0) {
        return state;
      }
      return state - action.payload;
    case ActionTypes.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default bankReducer;
