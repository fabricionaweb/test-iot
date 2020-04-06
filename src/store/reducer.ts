import { State } from './store';
import { Actions, ActionTypes } from './actions';

const reducer: React.Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE:
      return {
        ...state,
        balance: state.balance + 1,
      };

    case ActionTypes.DECREASE:
      return {
        ...state,
        balance: state.balance - 1,
      };

    case ActionTypes.UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export { reducer };
