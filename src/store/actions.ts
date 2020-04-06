import { State } from './store';

export enum ActionTypes {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  UPDATE = 'UPDATE',
}

interface IncreaseAction {
  type: ActionTypes.INCREASE;
}

interface DecreaseAction {
  type: ActionTypes.DECREASE;
}

interface UpdateAction {
  type: ActionTypes.UPDATE;
  payload: State;
}

export type Actions = IncreaseAction | DecreaseAction | UpdateAction;

export interface ActionsCreator {
  update: (payload: State) => void;
  increase: () => void;
  decrease: () => void;
}
