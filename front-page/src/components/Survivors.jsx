import React, { useContext, useState } from 'react'
import MyContext from '../context/Context'
import { renderCharacter } from '../utils/renderCharacter';
import '../styles/character.scss'

export default function Survivors() {
  const { survivors } = useContext(MyContext);
  const [ current, setCurrent ] = useState(0);
  const maxArrayPosition = survivors.length;

  function Next() {
    if ((current + 1) !== maxArrayPosition) {
      setCurrent(current + 1);
    }
    else {
      setCurrent(0)
    }
  }

  function Previous() {
    if ((current - 1) === -1) {
      setCurrent(maxArrayPosition - 1);
    }
    else {
      setCurrent(current - 1)
    }
  }

  return (
    <div className='character'>
      <iframe width="853" height="480" src="https://www.youtube.com/embed/pURiL2WLzdk?autoplay=1" title="Dead By Dayligh OST - Survivors Theme [1 hour version]" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" hidden></iframe>
      <button className='nextBtn' onClick={ () => Next() }>Next</button>
        { renderCharacter(survivors[current]) }
      <button className='previousBtn' onClick={ () => Previous() }>Previous</button>
    </div>
  )
}

