import React from 'react';
import { render } from '@testing-library/react';
import Routes from '../routes/routes';
import { MockedProvider } from '@apollo/client/testing';


describe('test routes', () => {
  it('teste route /', () => {
    render(
      <MockedProvider>
        <Routes />
      </MockedProvider>
      );
    expect(true).toBeTruthy();
  })
})
