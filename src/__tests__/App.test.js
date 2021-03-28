import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from '../App';

describe('Test Home Page', () => {
  
  afterEach(cleanup);
  
  it('Verifica se aparece o Texto Country List', async () => {
    const { getByText } = render(<App />);

    expect(getByText('Country List')).toBeInTheDocument();
  })
});