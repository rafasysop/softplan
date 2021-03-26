import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client';

import './Card.css';
import loadingIMG from '../../assets/loading.svg';

const countries =  gql`
      query {
        Country {
          name
          capital
          flag {
            svgFile
          }
        }
      }`;

function Card() {
  const [filter, setFilter] = useState('');
  const { loading, data } = useQuery(countries);
  if (loading) return (
    <div className="load">
      <img src={ loadingIMG } alt="Loading"/>
    </div>);
    
  console.log(data.Country);
  return (
    <>
      <div className='search-container' >
        <input type="text" name='search' className="search" onChange={({ target }) => setFilter(target.value)} placeholder='Buscar Pais' />
      </div>
      <div className='card-container'>
        {data.Country.filter(item => (item.name).toLowerCase().includes(filter.toLocaleLowerCase())).map((pais, index) => (
          <div key={index} className='card'>
            <img className='flag-card' src={pais.flag.svgFile} alt={pais.name} />
            <h3>{pais.name}</h3>
            Capital: {pais.capital}
          </div>
        ))}
      </div>
    </>
  )
}

export default Card
