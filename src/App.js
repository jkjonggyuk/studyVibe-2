import React from "react";
import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import NameDialog from "./components/NameDialog";
import GridList from "./components/GridList";
import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    
    <HashRouter>
      {/* <Navbar /> */}
      {/* <NameDialog /> */}
      {/* <Sidebar /> */}


      <Switch>
          <Route exact path='/' component={Home}/>
      </Switch>

    </HashRouter>

    
    </>
  );
}

export default App;
