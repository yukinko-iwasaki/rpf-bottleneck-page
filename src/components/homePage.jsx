import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import OutcomeContext from '../OutcomeContext';

// Import icons
import { FaGraduationCap, FaChartLine, FaShieldAlt, FaLeaf, FaHeartbeat } from 'react-icons/fa';

// Import images
import EducationImg from '../assets/E-WEB-Goal-04.png';
import EconomicResilienceImg from '../assets/E-WEB-Goal-01.png';
import GenderBasedViolenceImg from '../assets/E-WEB-Goal-05.png';
import RenewableEnergyImg from '../assets/E-WEB-Goal-07.png';
import UniversalHealthCareImg from '../assets/E-WEB-Goal-03.png';

function HomePage() {
  const { setOutcome } = useContext(OutcomeContext);
  const navigate = useNavigate();

  const handleNavigation = (newOutcome, path) => {
    setOutcome(newOutcome);
    navigate(path);
  };

  const tiles_custom = [
    { title: 'Education', icon: <div style={{ backgroundColor: 'pink', borderRadius: '50%', padding: '10px' }}><FaGraduationCap size={50} color='red' /></div>, path: '/Education' },
    { title: 'Economic Resilience', icon: <div style={{ backgroundColor: 'lightblue', borderRadius: '50%', padding: '10px' }}><FaChartLine size={50} color='blue' /></div>, path: '/EconomicResilience' },
    { title: 'Gender-Based Violence', icon: <div style={{ backgroundColor: 'lightgreen', borderRadius: '50%', padding: '10px' }}><FaShieldAlt size={50} color='green' /></div>, path: '/GenderBasedViolence' },
    { title: 'Renewable Energy', icon: <div style={{ backgroundColor: 'yellow', borderRadius: '50%', padding: '10px' }}><FaLeaf size={50} /></div>, path: '/RenewableEnergy' },
    { title: 'Universal Health Care', icon: <div style={{ backgroundColor: 'lavender', borderRadius: '50%', padding: '10px' }}><FaHeartbeat color='purple' size={50} /></div>, path: '/UniversalHealthCare' },
  ];

  const tiles_images = [
    { title: 'Economic Resilience', image: EconomicResilienceImg, path: '/EconomicResilience' },
        { title: 'Universal Health Care', image: UniversalHealthCareImg, path: '/UniversalHealthCare' },
    { title: 'Education', image: EducationImg, path: '/Education' },
    { title: 'Gender-Based Violence', image: GenderBasedViolenceImg, path: '/GenderBasedViolence' },
    { title: 'Renewable Energy', image: RenewableEnergyImg, path: '/RenewableEnergy' },
  ];

  return (
    <div className="home-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' , background:'#E1E1E1'}}>
      <h2 style={{ textAlign: 'center' }}>Select an outcome to explore</h2>
      <div className="tile-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', paddingTop: '50px', }}>
        {tiles_images.map((tile) => (
          <div
            key={tile.title}
            className="tile"
            style={{
              width: '15%', // Increased width
              textAlign: 'center',
              cursor: 'pointer',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white'
            }}
            onClick={() => handleNavigation(tile.title, tile.path)}
          >
            {/* {<div style={{ width: '70%', height: '100%', objectFit: 'cover', padding: '10px' }}>{tile.icon}</div>} */}
            <img src={tile.image} alt={tile.title} style={{ width: '70%', height: '100%', objectFit: 'cover' }} />
            <p style={{ margin: '10px 0', fontWeight: 'bold' }}>{tile.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;