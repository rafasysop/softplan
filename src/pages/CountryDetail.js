import React, { useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { countries, GET_COUNTRY } from '../config/client-graphql'

import loadingIMG from '../assets/loading.svg';
import Header from '../components/Header';
import { TiArrowBack, TiEdit } from "react-icons/ti";

function CountryDetail(props) {
  
  const { id } = useParams();
  const [index, setIndex] = useState();
  const [edit, setEdit] = useState(false);
  const [nameState, setNameState] = useState();
  const [capitalState, setCapitalState] = useState();
  const [areaState, setAreaState] = useState();
  const [populationState, setPopulationState] = useState();
  const [domainState, setDomainState] = useState();

  const { data: cache, client: client2 } = useQuery(GET_COUNTRY); 
  let { loading, data, client } = useQuery(countries);

  if (cache) {
    data = cache;
    client = client2;
  } 
  
  const saveInfo = () => {
      const newCountry = { Country: data.Country?.map((item, i) => {
        if (i === index) {
          return { 
            ...item,
            name : nameState,
            capital: capitalState,
            area: areaState,
            population: populationState,
            topLevelDomains: [ { name: domainState } ]
          };

        }
        return item;
      })}
      client.writeQuery({
        query: GET_COUNTRY,
        data: { ...newCountry },
      })
        setEdit(false);
      }

  if (loading) return (
    <div className="load">
      <img src={ loadingIMG } alt="Loading"/>
    </div>);

  if (data.Country){
    const newIndex = data.Country?.findIndex(item => item.numericCode === id);
    if (index === undefined) {
      setIndex(newIndex)
    }

    let { 
      name,
      flag,
      capital,
      area,
      population,
      topLevelDomains } = data.Country?.filter(item => item.numericCode === id)[0];

    if (nameState === undefined) {
      setNameState(name)
    }
    if (capitalState === undefined) {
      setCapitalState(capital)
    }
    if (areaState === undefined) {
      setAreaState(area)
    }
    if (populationState === undefined) {
      setPopulationState(population)
    }
    if (domainState === undefined) {
      setDomainState(topLevelDomains[0].name)
    }

    return (
      <>
        <Header 
          title={ `Country: ${name}` }
          subtitle={ `Capital: ${capital}` }
          flag={ flag.svgFile }
        />
        {
          edit ? (
            <div className="details-container">
              <div className="details-icons">
                <TiArrowBack
                  style={{ cursor: 'pointer' }}
                  onClick={() => setEdit(false)}
                />
              </div>
              <table>
                <thead>
                  <tr>
                    <th colSpan='2'>Editar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='cap-table'>Name:</td>
                    <td className='value-table'>
                      <input
                        onChange={ (e) => { setNameState(e.target.value) } }
                        type="text"
                        value={nameState}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='cap-table'>Capital:</td>
                    <td className='value-table'>
                      <input
                        onChange={ (e) => { setCapitalState(e.target.value) } }
                        type="text"
                        value={capitalState}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='cap-table'>Area:</td>
                    <td className='value-table'>
                      <input
                        onChange={ (e) => { setAreaState(e.target.value) } }
                        type="number"
                        value={areaState}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='cap-table'>Population:</td>
                    <td className='value-table'>
                      <input
                        onChange={ (e) => { setPopulationState(e.target.value) } }
                        type="number"
                        value={populationState}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='cap-table'>Top Level Domain:</td>
                    <td className='value-table'>
                      <input
                        onChange={ (e) => { setDomainState(e.target.value) } }
                        value={domainState}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type='button' onClick={() => saveInfo() }>Save Info</button>
            </div>
          )
          : (
           <div className='details-container'>
              <div className="details-icons">
                <Link to='/'><TiArrowBack /></Link>
                <TiEdit
                  style={{ cursor: 'pointer' }}
                  onClick={() => setEdit(true)}
                />
              </div>
              <table>
                <thead>
                  <tr>
                    <th colSpan='2'>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='cap-table'>Area:</td>
                    <td className='value-table'>{area}</td>
                  </tr>
                  <tr>
                    <td className='cap-table'>Population:</td>
                    <td className='value-table'>{population}</td>
                  </tr>
                  <tr>
                    <td className='cap-table'>Top Level Domain:</td>
                    <td className='value-table'>
                      {topLevelDomains.map((item) => item.name)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
        }
      </>
    )
  } 
}

export default CountryDetail;
