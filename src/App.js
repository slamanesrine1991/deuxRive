import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './Component/NavBar';
import Dashboard from './Component/List';

import Home from './Component/Home'
function App() {
  return (
    <div className="App">


<Router>
<NavBar/>
          <div className="container">
           
            <Route exact path="/" render={() => <Home/>} />
          
            
          
             
            <Route exact path="/projects"  component ={Dashboard} />
           {/*  <Route exact path="/login-admin" component={LoginAdmin} />
            <Route exact path="/job-offers" component={OfferDashboard} /> */}
       
        </div>
       
      </Router>
          
      
      {/* <Home/> */}
     
     {/* < Dashboard/> */}
    </div>
  );
}

export default App;
