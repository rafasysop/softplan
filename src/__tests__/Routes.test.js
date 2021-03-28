import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { Router } from 'react-router-dom';
import { mocks } from '../data/testData';
import { createMemoryHistory } from 'history';
import App from '../App';

const history = createMemoryHistory();


describe('test routes', () => {

  it('Test Card Mock', async () => {


    const app = renderer.create(
      <Router history={ history } >
        <MockedProvider mocks={mocks} addTypename={false}>
            <App />
        </MockedProvider>
      </Router>,
    );
      const tree = app.toJSON();
      const imgT = tree[1].children[0].props.src;
      expect(imgT).toBe('loading.svg');
      
      const { pathname } = history.location;
      expect(pathname).toBe('/')
  })
})
