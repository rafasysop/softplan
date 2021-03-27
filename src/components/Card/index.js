import React, { useState } from 'react'
import './Card.css';
import loadingIMG from '../../assets/loading.svg';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_COUNTRY, countries } from '../../config/client-graphql';

function Card() {
  const { data: cache, client } = useQuery(GET_COUNTRY);
  console.log('Este é o Cache', cache);
  console.log('Este é o Client', client);
 
  // const countryLocal = JSON.parse(localStorage.getItem('Country'));
  let { loading, data } = useQuery(countries);
  if (cache) {
    data = cache;
  } 
  const [filter, setFilter] = useState('');
  if (loading) return (
    <div className="load">
      <img src={ loadingIMG } alt="Loading"/>
    </div>);
  // localStorage.setItem('Country', JSON.stringify(data))
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
        {data.Country?.filter(item => (item.name).toLowerCase()
            .includes(filter.toLocaleLowerCase())).map((pais) => (
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

export default Card;
