/* eslint-disable default-case */
import { useReducer } from 'react';

const INITIAL_STATE = {
  isLogged: false,
} as const;

type UnLoggedUser = typeof INITIAL_STATE

type LoggedUser = {
  isLogged: true,
  email: string,
  age?:number
}

type State = UnLoggedUser | LoggedUser

const ACTION_TYPES = {
  login: 'LOGIN',
  logout: 'LOGOUT',
}as const;

type ActionTypes = typeof ACTION_TYPES

type LoginAction = {
  type: ActionTypes['login']
  payload:string
}

type LogoutAction = {
  type: ActionTypes['logout']
}

type Action = LoginAction | LogoutAction

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.login: {
      return {
        ...state,
        isLogged: true,
        email: action.payload,
      };
    }
    case ACTION_TYPES.logout: {
      return {
        ...state,
        isLogged: true,
      };
    }
  }
};

const useUser = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return {
    user,
    loginHandler,
    logoutHandler,
  };
};

export default useUser;
