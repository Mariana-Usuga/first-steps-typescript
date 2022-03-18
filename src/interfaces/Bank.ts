/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ActionTypes } from '../state/types/bankTypes';

interface DepositAction {
  type: ActionTypes.DEPOSIT
  payload: number
}

interface WithdrawAction {
  type: ActionTypes.WITHDRAW
  payload: number
}

interface BankruptAction {
  type: ActionTypes.BANKRUPT
  payload: number
}

export type Action = DepositAction | WithdrawAction | BankruptAction
