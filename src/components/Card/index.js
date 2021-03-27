import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client';

import './Card.css';
import loadingIMG from '../../assets/loading.svg';
import { Link } from 'react-router-dom';

const countries =  gql`
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

function Card() {
  const countryLocal = JSON.parse(localStorage.getItem('Country'));
  let { loading, data } = useQuery(countries);
  if (countryLocal) {
    data = countryLocal;
  } 
  const [filter, setFilter] = useState('');
  if (loading) return (
    <div className="load">
      <img src={ loadingIMG } alt="Loading"/>
    </div>);
  localStorage.setItem('Country', JSON.stringify(data))
  return (
    <>
      <div className='search-container' >
        <input
          name='search'
          className="search"
          onChange={({ target }) => setFilter(target.value)}
          placeholder='Search Country'
        />
      </div>
      <div className='card-container'>
        {data.Country.filter(item => (item.name).toLowerCase()
            .includes(filter.toLocaleLowerCase())).map((pais, index) => (
          <div key={pais.numericCode} className='card'>
            <img className='flag-card' src={pais.flag.svgFile} alt={pais.name} />
            <h3>{pais.name}</h3>
              Capital: {pais.capital}
            <Link
              to={`/country/${pais.numericCode}`}
              className='more-datails'
            > 
              + Details
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Card
