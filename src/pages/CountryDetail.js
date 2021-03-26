import React from 'react'
import { useParams } from 'react-router';

function CountryDetail(props) {
  const { id } = useParams();
  return (
    <div>
      Detalhes {id}
    </div>
  )
}

export default CountryDetail
