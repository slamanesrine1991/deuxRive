import React from 'react';

import './App.css';
import Projet from './Component/Projet'
import NavBar from './Component/NavBar';
import Dashboard from './Component/ProjectList';

function App() {
  return (
    <div className="App">
      <NavBar/>
     <Projet/>
     < Dashboard/>
    </div>
  );
}

export default App;
