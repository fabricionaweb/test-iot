import React from 'react';
import { render } from '@testing-library/react';
import Balance from './Balance';
import { Provider, State } from '../../store';

describe('Balance.tsx', () => {
  const mockState: Partial<State> = {
    balance: 123,
    currency: '€',
  };

  const Component: React.FC = () => (
    <Provider value={mockState}>
      <Balance />
    </Provider>
  );

  it('should display the balance value', () => {
    const { getByText } = render(<Component />);

    const balance = getByText(/123/);
    expect(balance).toBeInTheDocument();
  });

  it('should display the currency value', () => {
    const { getByText } = render(<Component />);

    const balance = getByText(/€/);
    expect(balance).toBeInTheDocument();
  });
});
