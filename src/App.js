import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './Component/NavBar';
import Dashboard from './Component/List';
import Contact from './Component/Contact'
import Cent from './Component/Cent';
import Forum from './Component/Forum';
import Home from './Component/Home'
function App() {
  return (
    <div className="App">


<Router>
<NavBar/>
          <div className="container">
           
            <Route exact path="/" render={() => <Home/>} />
            <Route exact path="/contact" component={Contact} />       
           <Route exact path="/projects"  component ={Dashboard} />
           <Route exact path="/forums" component={Forum} />
            <Route exact path="/cent" component={Cent} /> 
       
        </div>
       
      </Router>
          
      
      {/* <Home/> */}
     
     {/* < Dashboard/> */}
    </div>
  );
}

export default App;
