/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useDispatch, useSelector } from 'react-redux';
import { depositMoney, withdrawMoney, bankrupt } from '../state/actions/index';
import { State } from '../state/reducer/index';

const Bank = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state: State) => state.bank);

  // const handleDeposit = () => {

  // }
  return (
    <div>
      <h1>{amount}</h1>
      <button type="button" onClick={() => dispatch(depositMoney(1000))}>Deposit</button>
      <button type="button" onClick={() => dispatch(withdrawMoney(1000))}>Withdraw</button>
      <button type="button" onClick={() => dispatch(bankrupt(1000))}>Bankrupt</button>
    </div>
  );
};

export default Bank;
