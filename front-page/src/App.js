/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import MyContext from './context/Context';
import MainPage from './pages/MainPage';
import Secondary from './pages/Secondary';

function App() {
  const { apiGet } = useContext(MyContext);

  useEffect(() => {
    apiGet()
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <MainPage /> }/>
        <Route path='/secondary' element={ <Secondary /> }/>
      </Routes>
    </div>
  )
}

export default App
