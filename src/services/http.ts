export interface ServiceResponse<T = {}> {
  loading: boolean;
  error: boolean;
  data: T;
}

export const defaultResponse: ServiceResponse<{}> = {
  loading: true,
  error: false,
  data: {},
};

const defaultRequest: RequestInit = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

function http<T>(input: RequestInfo, request?: RequestInit): Promise<ServiceResponse<T>> {
  return fetch(input, { ...defaultRequest, ...request })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }

      return response.json();
    })
    .then((response) => ({
      loading: false,
      error: false,
      data: response,
    }))
    .catch((response) => ({
      loading: false,
      error: true,
      data: response,
    }));
}

export default http;
