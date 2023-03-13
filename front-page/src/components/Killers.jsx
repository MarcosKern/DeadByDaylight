import React, { useContext, useState } from 'react'
import MyContext from '../context/Context'
import { renderCharacter } from '../utils/renderCharacter';
import '../styles/character.scss'

export default function Killers() {
  const { killers, currentKiller, setCurrentKiller } = useContext(MyContext);
  const [ toggle, setToggle ] = useState(false);
  
  const maxArrayPosition = killers.length;

  function Next() {
    if ((currentKiller + 1) !== maxArrayPosition) {
      setCurrentKiller(currentKiller + 1);
    }
    else {
      setCurrentKiller(0)
    }
  }

  function Previous() {
    if ((currentKiller - 1) === -1) {
      setCurrentKiller(maxArrayPosition - 1);
    }
    else {
      setCurrentKiller(currentKiller - 1)
    }
  }

  return (
    <div className='character'>
      {
        toggle
          ? <section className='characterList' onMouseLeave={ () => setToggle(!toggle)}>
            {
              killers.map((killer, index) => {
                const {
                  icon,
                  name,
                } = killer;
                return <button key={ index } onClick={ () => {
                    setCurrentKiller(index)
                    setToggle(!toggle)
                  } }>
                  <img src={ icon } alt={ name } />
                </button>
              })
            }
          </section>
          : <button className='choseBtn' onClick={ () => setToggle(!toggle)}>Killers</button>
      }
      <button className='nextBtn' onClick={ () => Next() }>Next</button>
        { renderCharacter(killers[currentKiller]) }
      <button className='previousBtn' onClick={ () => Previous() }>Previous</button>
    </div>
  )
}
