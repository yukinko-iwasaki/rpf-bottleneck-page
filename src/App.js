import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { useState } from 'react';

import VerticalNavbarPermanent from './components/navbars';
function App() {

  const [viz_type, setVizType] = useState('Role');
  const handleTabChange = (key) => {
    setVizType(key);
  };
  return (
    <div className="App">
      <Tabs defaultActiveKey="Education" className="mb-2" onSelect={handleTabChange}>
          <Tab eventKey="Education" title="Basic Education">
            <VerticalNavbarPermanent viz_type={viz_type}/>
          </Tab>
          <Tab eventKey="EconomicResilience" title="Economic Resilience">
            <VerticalNavbarPermanent viz_type={viz_type}/>
         </Tab>
        <Tab eventKey="Violence" title="Gender-Based Violence">
            <VerticalNavbarPermanent viz_type={viz_type}/>
         </Tab>
        <Tab eventKey="RenewableEnergy" title="Renewable Energy">
            <VerticalNavbarPermanent viz_type={viz_type}/>
         </Tab>
        <Tab eventKey="UniversalHealthCare" title="Universal Health Care">
            <VerticalNavbarPermanent viz_type={viz_type}/>
         </Tab>
      </Tabs>

    </div>
  );
}

export default App;
