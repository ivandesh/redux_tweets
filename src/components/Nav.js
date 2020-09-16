import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to='/' exact activeClassName='active'>Home</NavLink>
      <NavLink to='/add' exact activeClassName='active'>New tweet</NavLink>
    </nav>
  )
}
