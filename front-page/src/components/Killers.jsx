import React, { useContext, useState } from 'react'
import MyContext from '../context/Context'
import { renderCharacter } from '../utils/renderCharacter';

export default function Killers() {
  const { killers } = useContext(MyContext);
  const [ current, setCurrent ] = useState(0);
  const maxArrayPosition = killers.length;

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
      <div>
      <button onClick={ () => Next() }>Next</button>
        { renderCharacter(killers[current]) }
      <button onClick={ () => Previous() }>Previous</button>
    </div>
    </div>
  )
}
