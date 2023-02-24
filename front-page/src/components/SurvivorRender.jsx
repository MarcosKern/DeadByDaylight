import React, { useContext, useState } from 'react'
import MyContext from '../context/Context';

export default function SurvivorRender() {
  const { survivors } = useContext(MyContext);
  const [ survivorArrayPosition, setPosition ] = useState(0)
  const [ showSurvivor, setShowSurvivor ] = useState([survivors[survivorArrayPosition]])
  const quantity = survivors.length;

  function changeSurvivor(param) {
    if (param === 'Next') {
      if ((survivorArrayPosition + 1) === quantity) {
        setPosition(0)
        setShowSurvivor([survivors[0]])
      } else {
        setPosition(survivorArrayPosition + 1)
        setShowSurvivor([survivors[survivorArrayPosition + 1]])
      }
    }
    if (param === 'Previous') {
      if ((survivorArrayPosition - 1) === -1) {
        setPosition(quantity - 1)
        setShowSurvivor([survivors[quantity - 1]])
      } else {
        setPosition(survivorArrayPosition - 1)
        setShowSurvivor([survivors[survivorArrayPosition - 1]])
      }
    }
  }

  return (
    <div>
      <button
        onClick={ () => changeSurvivor('Next') }
      >
        Next
      </button>
      <section>
        { showSurvivor.map((show) => {
          const {
                id, name, imageUrl, description, lore, dlc, perks
              } = show;
              return <div key={ id }>
                <h1>{ name }</h1>
                <img src={ imageUrl } alt="" />
                <p>{ description }</p>
                <p>{ lore }</p>
                { dlc && <p>{ dlc }</p> }
                <div>
                  { perks.map((perk, ind) => {
                    return <img key={ind} width={ 231 } height={ 231 } src={ perk.imageUrl } alt={perk.name}/>
                  })}
                </div>
              </div>
            }) }
      </section>
      <button
        onClick={ () => changeSurvivor('Previous') }
      >
        Previous
      </button>
    </div>
  )
}
