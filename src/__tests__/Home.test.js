import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider  } from '@apollo/client/testing';
import Home from '../pages/Home';
import { renderHook } from '@testing-library/react-hooks';
import { useQuery } from '@apollo/client';
import { countries } from '../config/client-graphql';
import MyCard from '../components/Card';
import { mocks } from './testData';
const ImgLoading = 'img-loading';

describe('Test Home Page', () => {
  
  afterEach(cleanup);
  
  it('Verifica se aparece o Texto Country List', async () => {
    const { result: { data } } = renderHook(() => useQuery(countries))
    const { getByText } = render(
      // mocks={mocks} addTypename={false}
      <MockedProvider mocks={ data } addTypename={false}>
        <Home />
      </MockedProvider>,
      );

    expect(getByText('Country List')).toBeInTheDocument();
  })

  it('Verifica se aparece a IMG Loading', async () => {
    const { result: { data }} = renderHook(() => useQuery(countries))
    const { getByTestId } = render(
      <MockedProvider mocks={ data } addTypename={false}>
          <Home />
      </MockedProvider>,
      );
      expect(getByTestId(ImgLoading)).toBeInTheDocument();
  })
})

describe('test Card', () => {
   it('Test Card Mock', () => {
    const card = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MyCard />
      </MockedProvider>,
    );

     const tree = card.toJSON();
     console.log(tree);
   })
})