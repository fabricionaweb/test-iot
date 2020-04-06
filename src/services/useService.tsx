import { useState, useEffect } from 'react';
import http, { defaultResponse, ServiceResponse } from './http';
import { API_URL, Endpoints } from './endpoints';
import { State } from '../store';

function useService<T>(endpoint: Endpoints, request?: RequestInit): ServiceResponse<T> {
  const [response, setResponse] = useState(defaultResponse as ServiceResponse<T>);

  useEffect(() => {
    http<T>(API_URL + endpoint, request).then((data) => setResponse(data));
  }, [endpoint, request]);

  return response;
}

const useCurrencies = (): ServiceResponse<State> => useService<State>(Endpoints.Currencies);

export { useCurrencies };
