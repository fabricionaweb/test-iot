import { ServiceResponse } from './http';
import { State } from '../store';
import { useService } from './useService';
import { Endpoints } from './endpoints';

const useCurrencies = (): ServiceResponse<State> => useService<State>(Endpoints.Currencies);

export { useCurrencies };
