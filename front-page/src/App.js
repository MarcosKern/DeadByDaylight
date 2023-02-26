/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router';
import BloodWeb from './components/BloodWeb';
import Game from './components/Game';
import Header from './components/Header';
import Killers from './components/Killers';
import Survivors from './components/Survivors';
import MyContext from './context/Context';

function App() {
  const { apiGet } = useContext(MyContext);

  useEffect(() => {
    apiGet()
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <Game /> }/>
        <Route path='/bloodweb' element={ <BloodWeb /> }/>
        <Route path='/survivors' element={ <Survivors /> }/>
        <Route path='/killers' element={ <Killers /> }/>
      </Routes>
    </div>
  )
}

export default App
