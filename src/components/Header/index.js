import React from 'react'
import './Header.css';
import PropTypes from 'prop-types';

function Header(props) {
  const { title, subtitle, flag } = props
  return (
    <header>
      {flag && <img src={ flag } alt={ title }/>}
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  flag: PropTypes.string
}

export default Header
