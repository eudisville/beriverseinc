import React from 'react'
import { Link } from 'react-router-dom';
import routes from '../routes';
import './Nav.css'

function Nav() {
  return (
    <div>
        <div className="navbar">
          <div className="logo"><h1>Beriverse</h1></div>
          <div className="nav-links">
            <ul>
              {routes.map((route, index) => (
                <li key={index}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Nav;