import React from 'react';
import { render } from '@testing-library/react';
import * as httpModule from '../../services/http';
import App from './App';

describe('App.tsx', () => {
  beforeAll(() => {
    const httpMocked = jest.spyOn(httpModule, 'http');

    httpMocked.mockImplementation(() => {
      return Promise.resolve({
        error: false,
        loading: false,
        data: {},
      });
    });
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should display the balance component', async () => {
    const { findByTestId } = render(<App />);
    const balance = await findByTestId('balance');

    expect(balance).toBeInTheDocument();
  });

  it('should display increase button', async () => {
    const { findByTestId } = render(<App />);
    const increase = await findByTestId('increase');

    expect(increase).toBeInTheDocument();
  });

  it('should display decrease button', async () => {
    const { findByTestId } = render(<App />);
    const decrease = await findByTestId('decrease');

    expect(decrease).toBeInTheDocument();
  });
});
