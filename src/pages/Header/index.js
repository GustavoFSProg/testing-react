import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <br />
          <br />

          <Link to="/register">Cadastro</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
