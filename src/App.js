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
      <Tabs defaultActiveKey="Role" className="mb-2" onSelect={handleTabChange}>
          <Tab eventKey="Role" title="Role">
            <VerticalNavbarPermanent viz_type={viz_type}/>

          </Tab>
          <Tab eventKey="Bottleneck" title="Bottleneck">
          <VerticalNavbarPermanent viz_type={viz_type}/>
        </Tab>
      </Tabs>

    </div>
  );
}

export default App;
