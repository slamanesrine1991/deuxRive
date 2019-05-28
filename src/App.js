import React from 'react';

import './App.css';
import Projet from './Component/Projet'
import NavBar from './Component/NavBar';
import Dashboard from './Component/List';
import ProjetAnt from './Component/ProjetAnt';
import NavMenu from './Component/NavMenu'
function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <NavMenu/> */}

     {/* <ProjetAnt/> */}
     < Dashboard/>
    </div>
  );
}

export default App;
