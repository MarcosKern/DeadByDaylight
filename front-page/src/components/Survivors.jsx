import React, { useContext, useState } from 'react'
import MyContext from '../context/Context'
import { renderCharacter } from '../utils/renderCharacter';

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
    <div>
      <button onClick={ () => Next() }>Next</button>
        { renderCharacter(survivors[current]) }
      <button onClick={ () => Previous() }>Previous</button>
    </div>
  )
}
