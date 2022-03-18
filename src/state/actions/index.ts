/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { Dispatch } from 'react';
import { ActionTypes } from '../types/bankTypes';
import { Action } from '../../interfaces/Bank';

export const depositMoney = (amount: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypes.DEPOSIT,
    payload: amount,
  });
};

export const withdrawMoney = (amount: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypes.WITHDRAW,
    payload: amount,
  });
};

export const bankrupt = (amount: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionTypes.BANKRUPT,
    payload: amount,
  });
};
