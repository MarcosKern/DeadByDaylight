import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.scss'

export default function Header() {

  return (
    <header>
      <a href="https://deadbydaylight.com/" target="_blank" rel="noreferrer">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Behaviour_Interactive_logo.svg" alt="behavior interactive logo" />
      </a>
      <nav>
        <NavLink className='link' to={'/game'} >THE GAME</NavLink>
        <NavLink className='link' to={'/bloodweb'} >THE BLOODWEB</NavLink>
        <NavLink className='link' to={'/survivors'} >THE SURVIVORS</NavLink>
        <NavLink className='link killerLink' to={'/killers'} >THE KILLERS</NavLink>
      </nav>
      <a href="https://deadbydaylight.fandom.com/wiki/Dead_by_Daylight_Wiki" target="_blank" rel="noreferrer">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Fandom_heart-logo.svg" alt="fandom logo" />
      </a>
    </header>
  )
}
