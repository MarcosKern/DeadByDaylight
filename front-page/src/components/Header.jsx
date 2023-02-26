import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {

  return (
    <div>
      <nav>
        <NavLink to={'/'} >The Game</NavLink>
        <NavLink to={'/bloodweb'} >The Bloodweb</NavLink>
        <NavLink to={'/survivors'} >The Survivors</NavLink>
        <NavLink to={'/killers'} >The Killers</NavLink>
      </nav>
    </div>
  )
}
