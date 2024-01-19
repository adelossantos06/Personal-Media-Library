import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import "./App.css"
import { Outlet } from 'react-router-dom';


function App() {
  const [media, setMedia] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/media")
      .then(r => r.json())
      .then(data => setMedia(data))
  },)

  return (
    <>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Outlet context={{ media: media, setMedia: setMedia }} />

      </div>



    </>
  );
}

export default App;
