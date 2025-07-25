import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import VerticalNavbarPermanent from './components/navbars';
import HomePage from './components/homePage';
function App() {


  const [outcome, setOutcome] = useState('Education');
  const handleTabChange = (key) => {
    setOutcome(key);
  };


  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path={"/"} element={<HomePage />} /> */}
        <Route path={'/'} element={<VerticalNavbarPermanent outcome={"Education"}/>} />
      </Routes>
    </BrowserRouter>
          /* <Tabs defaultActiveKey="Education" className="mb-2"  fill justify onSelect={handleTabChange}>
          <Tab eventKey="Education" title="Basic Education" style={{height: '100%'}}>
            <VerticalNavbarPermanent outcome={outcome}/>
          </Tab>
          <Tab eventKey="EconomicResilience" title="Economic Resilience" style={{height: '100%'}} >
            <VerticalNavbarPermanent outcome={outcome}/>
         </Tab>
        <Tab eventKey="Violence" title="Gender-Based Violence" style={{height: '100%'}}>
            <VerticalNavbarPermanent outcome={outcome}/>
         </Tab>
        <Tab eventKey="RenewableEnergy" title="Renewable Energy" style={{height: '100%'}}>
            <VerticalNavbarPermanent outcome={outcome}/>
         </Tab>
        <Tab eventKey="UniversalHealthCare" title="Universal Health Care" style={{height: '100%'}}>
            <VerticalNavbarPermanent outcome={outcome}/>
         </Tab>
      </Tabs> */

  )
  
}

export default App;
