import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './Context';
import DBDapi from '../utils/fetch';

function Provider({ children }) {
const [ survivors, setSurvivors ] = useState([]);
const [ killers, setKillers ] = useState([]);
const [ loading, isLoading ] = useState(true);
const [ currentKiller, setCurrentKiller ] = useState(0);
const [ currentSurvivor, setCurrentSurvivor ] = useState(0);

const getAllSurvivors = async () => DBDapi('GET', 'survivors')
  .then(({ data: survivors }) => setSurvivors(survivors))

const getAllKillers = async () => DBDapi('GET', 'killers')
  .then(({ data: killers }) => setKillers(killers))

const apiGet = async () => {
  await getAllSurvivors();
  await  getAllKillers();
  isLoading(false);
}

  const value = {
    killers,
    survivors,
    apiGet,
    loading,
    currentKiller,
    setCurrentKiller,
    currentSurvivor,
    setCurrentSurvivor
  }

  return (
    <MyContext.Provider value={ value }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;