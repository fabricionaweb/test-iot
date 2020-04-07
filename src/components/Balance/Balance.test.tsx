import React from 'react';
import { render } from '@testing-library/react';
import * as httpModule from '../../services/http';
import { Provider, State } from '../../store';
import Balance from './Balance';

describe('Balance.tsx', () => {
  beforeAll(() => {
    const httpMocked = jest.spyOn(httpModule, 'http');
    const stateMocked: State = {
      balance: 123,
      currency: '€',
    };

    httpMocked.mockImplementation(() => {
      return Promise.resolve({
        error: false,
        loading: false,
        data: stateMocked,
      });
    });
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  const Component: React.FC = () => (
    <Provider>
      <Balance />
    </Provider>
  );

  it('should display the balance value', async () => {
    const { findByText } = render(<Component />);

    const balance = await findByText(/123/);
    expect(balance).toBeInTheDocument();
  });

  it('should display the currency value', async () => {
    const { findByText } = render(<Component />);

    const balance = await findByText(/€/);
    expect(balance).toBeInTheDocument();
  });
});
