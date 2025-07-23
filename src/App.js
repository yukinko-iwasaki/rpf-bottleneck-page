import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState , useRef, useEffect} from 'react';
import VerticalNavbarPermanent from './components/navbars';
function App() {
  const svgRef = useRef(null);

  const [outcome, setOutcome] = useState('Education');
  const handleTabChange = (key) => {
    setOutcome(key);
  };



  return (
    <div className="App">

      <Tabs defaultActiveKey="Education" className="mb-2"  fill justify onSelect={handleTabChange}>
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
      </Tabs>
    </div>
  );
}

export default App;
