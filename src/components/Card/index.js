import React from 'react'
import { gql, useQuery } from '@apollo/client';

import './Card.css'

const countries =  gql`
      query {
        Country {
          name
          capital
          flag {
            emoji
            emojiUnicode
            svgFile
          }
        }
      }`;

function Card() {
  const { loading, data } = useQuery(countries);
  if (loading) return <div className="card-container">Carregando...</div>;
  console.log(data.Country);
  return (
    <div className='card-container'>
      {data.Country.map((pais, index) => (
        <div key={index} className='card'>
          <img className='flag-card' src={pais.flag.svgFile} alt={pais.name} />
          <h3>{pais.name}</h3>
          Capital: {pais.capital}
        </div>
      ))}
    </div>
  )
}

export default Card
