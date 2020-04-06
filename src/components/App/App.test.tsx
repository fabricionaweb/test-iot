import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App.tsx', () => {
  it('should display the balance component', () => {
    const { getByTestId } = render(<App />);

    const balance = getByTestId('balance');
    expect(balance).toBeInTheDocument();
  });

  it('should display increase button', () => {
    const { getByTestId } = render(<App />);

    const increase = getByTestId('increase');
    expect(increase).toBeInTheDocument();
  });

  it('should display decrease button', () => {
    const { getByTestId } = render(<App />);

    const decrease = getByTestId('decrease');
    expect(decrease).toBeInTheDocument();
  });
});
