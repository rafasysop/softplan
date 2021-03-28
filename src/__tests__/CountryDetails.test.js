import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';

import { mocks } from '../data/testData';
import CountryDetail from '../pages/CountryDetail';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

describe('Test CountryDetails', () => {
  it('Test if True to be Truthy', async () => {
    const location = {
      pathname: '/country/004',
    }
    history.push(location);

    const detail = renderer.create(
      <Router history={ history }>
        <MockedProvider mocks={mocks} addTypename={false}>
            <CountryDetail />  
        </MockedProvider>
      </Router>
      );
      await Promise.resolve();

      const tree = detail.toJSON();
      console.log(tree);

  })
})