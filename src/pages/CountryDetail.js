import React from 'react'
import { useParams } from 'react-router';
import { gql, useQuery } from '@apollo/client';

import loadingIMG from '../assets/loading.svg';
import Header from '../components/Header';

function CountryDetail(props) {

const { id } = useParams();

const countryQuery = gql`
  query {
    Country {
      name
      area
      population
      capital
      numericCode
      location {
        latitude
        longitude
      }
      flag {
        emoji
        emojiUnicode
        svgFile
      }
      topLevelDomains {
        name
      }
      
    }
  }`;
  const countryLocal = JSON.parse(localStorage.getItem('Country'));
  let { loading, error, data } = useQuery(countryQuery)

  if (countryLocal) {
    data = countryLocal;
  } 

  if (loading) return (
    <div className="load">
      <img src={ loadingIMG } alt="Loading"/>
    </div>);

  if (error) return <p>Error :(</p>;

  if (data.Country){
    const { name, flag, capital, area, population, topLevelDomains } = data.Country.filter(item => item.numericCode === id)[0];
    return (
      <>
        <Header 
          title={ `Country: ${name}` }
          subtitle={ `Capital: ${capital}` }
          flag={ flag.svgFile }
        />
        <div className='details-container'>
          <table>
            <thead>
              <tr>
                <th colSpan='2'>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='cap'>Area</td>
                <td>{area}</td>
              </tr>
              <tr>
                <td className='cap'>Population</td>
                <td>{population}</td>
              </tr>
              <tr>
                <td className='cap'>Top Level Domain</td>
                <td>{topLevelDomains.map((item, index) => <p key={item.name}>{item.name}</p> )}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  } 
}

export default CountryDetail;
