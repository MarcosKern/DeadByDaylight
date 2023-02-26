/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router';
import BloodWeb from './components/BloodWeb';
import Game from './components/Game';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Killers from './components/Killers';
import Loading from './components/Loading';
import Survivors from './components/Survivors';
import MyContext from './context/Context';
import './styles/app.scss';

function App() {
  const { apiGet, loading } = useContext(MyContext);

  useEffect(() => {
    apiGet()
  }, [])

  return (
    <div>
      { !loading
        ? <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={ <HomePage /> }/>
            <Route path='/game' element={ <Game /> }/>
            <Route path='/bloodweb' element={ <BloodWeb /> }/>
            <Route path='/survivors' element={ <Survivors /> }/>
            <Route path='/killers' element={ <Killers /> }/>
          </Routes>
        </div>
        : <Loading />
      }
    </div>
  )
}

export default App
