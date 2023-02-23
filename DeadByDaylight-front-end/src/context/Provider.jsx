import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import MyContext from './Context';
import DBDapi from '../utils/fetch';

function Provider({ children }) {
const [ survivors, setSurvivors ] = useState([]);
const [ killers, setKillers ] = useState([]);
const [ loading, isLoading ] = useState(true);

const getAllSurvivors = useCallback(async () => DBDapi('GET', 'survivors')
  .then(({ data: survivors }) => setSurvivors(survivors)))

const getAllKillers = useCallback(async () => DBDapi('GET', 'killers')
  .then(({ data: killers }) => setKillers(killers)))

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