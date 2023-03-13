import React, { useContext, useState } from 'react'
import MyContext from '../context/Context'
import { renderCharacter } from '../utils/renderCharacter';
import '../styles/character.scss'

export default function Survivors() {
  const { survivors, currentSurvivor, setCurrentSurvivor } = useContext(MyContext);
  const [ toggle, setToggle ] = useState(false);
  const maxArrayPosition = survivors.length;

  function Next() {
    if ((currentSurvivor + 1) !== maxArrayPosition) {
      setCurrentSurvivor(currentSurvivor + 1);
    }
    else {
      setCurrentSurvivor(0)
    }
  }

  function Previous() {
    if ((currentSurvivor - 1) === -1) {
      setCurrentSurvivor(maxArrayPosition - 1);
    }
    else {
      setCurrentSurvivor(currentSurvivor - 1)
    }
  }

  return (
    <div className='character'>
      {
        toggle
          ? <section className='characterList' onMouseLeave={ () => setToggle(!toggle)}>
            {
              survivors.map((survivor, index) => {
                const {
                  icon,
                  name,
                } = survivor;
                return <button key={ index } onClick={ () => {
                    setCurrentSurvivor(index)
                    setToggle(!toggle)
                  } }>
                  <img src={ icon } alt={ name } />
                </button>
              })
            }
          </section>
          : <button className='choseBtn' onClick={ () => setToggle(!toggle)}>Survivors</button>
      }
      <iframe width="853" height="480" src="https://www.youtube.com/embed/pURiL2WLzdk?autoplay=1" title="Dead By Dayligh OST - Survivors Theme [1 hour version]" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" hidden></iframe>
      <button className='nextBtn' onClick={ () => Next() }>Next</button>
        { renderCharacter(survivors[currentSurvivor]) }
      <button className='previousBtn' onClick={ () => Previous() }>Previous</button>
    </div>
  )
}

