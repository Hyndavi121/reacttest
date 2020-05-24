import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import Navigation from './Comp/Components/Navbar';
import Routes from './Comp/Routes';





function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes />
    </BrowserRouter>


  );
}

export default App;
