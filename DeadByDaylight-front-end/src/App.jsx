import React, { useContext, useEffect, useState } from 'react'
import MyContext from './context/Context';
import MainPage from './pages/MainPage';

function App() {
  const { apiGet, loading } = useContext(MyContext);

  useEffect(() => {
    apiGet();
  });

  return (
    <div className="App">
      { !loading && <MainPage /> }
    </div>
  )
}

export default App
