/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable default-param-last */
import { DEPOSIT, WITHDRAW, BANKRUPT } from '../types/bankTypes';

const initialState = 0;

interface DepositAction {
  type: 'DEPOSIT'
  payload: number
}

interface WithdrawAction {
  type: 'WITHDRAW',
  payload: number
}

interface BankruptAction {
  type: 'BANKRUPT',
  payload: number
}

type Action = DepositAction | WithdrawAction | BankruptAction

const bankReducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload: DepositAction;
    case WITHDRAW:
      return state - action.payload;
    case BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default bankReducer;
