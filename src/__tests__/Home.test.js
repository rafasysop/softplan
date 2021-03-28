import React from 'react';

import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect'

import { MockedProvider  } from '@apollo/client/testing';
import { mocks } from '../data/testData';
import Home from '../pages/Home';


describe('Test Home Page', () => {
  
  afterEach(cleanup);
  
  it('Checks if a Header exists', async () => {
    const home = renderer.create(
      <MockedProvider mocks={ mocks } addTypename={false}>
        <Home />
      </MockedProvider>,
      );
    const tree = home.toJSON();
    expect(tree[0].type).toBe('header');
  })

  it('Checks if there is h1 inside Header', async () => {
    const home = renderer.create(
      <MockedProvider mocks={ mocks } addTypename={false}>
        <Home />
      </MockedProvider>,
      );
    const tree = home.toJSON();
    console.log(tree[0].children[1].children[0]);
    expect(tree[0].children[1].children[0].type).toBe('h1');
  })

  it('Checks whether the Country List text exists within h1', async () => {
    const home = renderer.create(
      <MockedProvider mocks={ mocks } addTypename={false}>
        <Home />
      </MockedProvider>,
      );
    const tree = home.toJSON();
    console.log(tree[0].children[1].children[0]);
    expect(tree[0].children[1].children[0].children[0]).toBe('Country List');
  })

  it('Check if IMG Loading appears', async () => {
    const home = renderer.create(
      <MockedProvider mocks={ mocks } addTypename={false}>
          <Home />
      </MockedProvider>,
      );
    const tree = home.toJSON();
    expect(tree[1].children[0].props.src).toBe('loading.svg');
  })
})
