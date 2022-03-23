/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { depositMoney, withdrawMoney, bankrupt } from '../state/actions/index';
import { State } from '../state/reducer/index';

const Bank = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state: State) => state.bank);
  const [amountState, setAmountState] = useState({ deposit: '', withdraw: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmountState({ ...amountState, [e.target.name]: e.target.value });
  };

  const onSubmit = (operation: string) => {
    switch (operation) {
      case 'deposit':
        dispatch(depositMoney(Number(amountState.deposit)));
        setAmountState({ ...amountState, deposit: ' ' });
        break;
      case 'withdraw':
        dispatch(withdrawMoney(Number(amountState.withdraw)));
        setAmountState({ ...amountState, withdraw: ' ' });
        break;
      default:
        dispatch(bankrupt(0));
    }
  };

  return (
    <div className="bg-dark" style={{ height: '100vh' }}>
      <div className="container-sm">
        <h1>{amount}</h1>
        <div className="m-2">
          <label htmlFor="deposit">
            <input
              type="number"
              name="deposit"
              id="deposit"
              value={amountState.deposit}
              onChange={handleChange}
            />
          </label>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => onSubmit('deposit')}
          >
            Deposit
          </button>
        </div>
        <div className="m-2">
          <label htmlFor="withdraw">
            <input
              type="number"
              name="withdraw"
              id="withdraw"
              value={amountState.withdraw}
              onChange={handleChange}
            />
          </label>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => onSubmit('withdraw')}
          >
            Withdraw

          </button>
        </div>
        <div>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => onSubmit('bankrupt')}
          >
            Withdraw all the money
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bank;
