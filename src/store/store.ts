import { Currencies } from '../constants';

export interface State {
  balance: number;
  currency: string;
}

const initialState: State = {
  balance: 0,
  currency: Currencies.Pounds,
};

export { initialState };
