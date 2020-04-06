import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Actions from './Actions';
import { Provider, State, useStore } from '../../store';

describe('Actions.tsx', () => {
  const mockState: Partial<State> = {
    balance: 123,
  };

  const Component: React.FC = () => (
    <Provider value={mockState}>
      <Presenter />
    </Provider>
  );

  const Presenter: React.FC = () => {
    const { state } = useStore();

    return (
      <>
        <Actions />
        <span data-testid="balance">{state.balance}</span>
      </>
    );
  };

  it('should render increase button', () => {
    const { getByTestId } = render(<Component />);

    const increase = getByTestId('increase');
    expect(increase).toBeInTheDocument();
  });

  it('should render decrease button', () => {
    const { getByTestId } = render(<Component />);

    const decrease = getByTestId('decrease');
    expect(decrease).toBeInTheDocument();
  });

  describe('when click on increase button', () => {
    it('should add 1 to balance', () => {
      const { getByTestId } = render(<Component />);
      const increase = getByTestId('increase');
      const balance = getByTestId('balance');

      act(() => {
        fireEvent.click(increase);
      });

      expect(balance).toHaveTextContent('124');
    });
  });

  describe('when click on decrease button', () => {
    it('should remove 1 to balance', () => {
      const { getByTestId } = render(<Component />);
      const decrease = getByTestId('decrease');
      const balance = getByTestId('balance');

      act(() => {
        fireEvent.click(decrease);
      });

      expect(balance).toHaveTextContent('122');
    });
  });
});
