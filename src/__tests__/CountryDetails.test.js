import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
// import CountryDetail from "../pages/CountryDetail";
// import { mocks } from './testData';
import { renderHook } from '@testing-library/react-hooks';
import useCountries from './useCountries';
import CountryDetail from '../pages/CountryDetail';
import renderWithRouter from './renderWithRouter';

describe('Test CountryDetails', () => {
  it('Test if True to be Truthy', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCountries() );
    const mocks = [];
    const { debug } = renderWithRouter(
      <MockedProvider mocks={mocks} addTypename={false}>
          <CountryDetail />  
      </MockedProvider>
      );
    debug();
    console.log(result);
    return { result, waitForNextUpdate };
  })
})