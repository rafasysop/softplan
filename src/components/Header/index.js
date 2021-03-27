import React from 'react'
import './Header.css';
import PropTypes from 'prop-types';

function Header(props) {
  const { title, subtitle, flag } = props
  return (
    <header>
      {flag 
        ? <img src={ flag } className='header-flag' alt={ title }/> 
        : <div className="spacer"></div>  
      }
      <div className="text-title">
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
      </div>
      <div className="spacer">
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  flag: PropTypes.string
}

export default Header
