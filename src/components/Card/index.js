import React, { useState } from 'react'
import './Card.css';
import loadingIMG from '../../assets/loading.svg';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_COUNTRY, countries } from '../../config/client-graphql';

function Card() {
  const { data: cache } = useQuery(GET_COUNTRY); 
  let { loading, data } = useQuery(countries);
  if (cache) {
    data = cache;
  } 
  const [filter, setFilter] = useState('');
  if (loading) return (
    <div className="load">
      <img src={ loadingIMG } data-testid='img-loading' alt="Loading"/>
    </div>);
  return (
    <main>
      <section className='search-container' >
        <input
          name='search'
          className="search"
          onChange={({ target }) => setFilter(target.value)}
          placeholder='Search Country'
        />
      </section>
      <section className='card-container'>
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
      </section>
    </main>
  )
}

export default Card;
