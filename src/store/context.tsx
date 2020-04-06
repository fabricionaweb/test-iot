import React, { useReducer, useContext, createContext, useMemo } from 'react';
import { reducer } from './reducer';
import { initialState, State } from './store';
import { Actions, ActionTypes, ActionsCreator } from './actions';

interface Store {
  state: State;
  dispatch: React.Dispatch<Actions>;
}

const Context = createContext({} as Store);

const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

const useStore = (): Store => useContext(Context);

const useActions = (): ActionsCreator => {
  const { dispatch } = useStore();

  return useMemo(
    () => ({
      update: (payload: State): void => {
        dispatch({ type: ActionTypes.UPDATE, payload });
      },
      increase: (): void => {
        dispatch({ type: ActionTypes.INCREASE });
      },
      decrease: (): void => {
        dispatch({ type: ActionTypes.DECREASE });
      },
    }),
    [dispatch],
  );
};

export { Provider, useStore, useActions };
