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

  return (
    <div className="home-page" style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> {/* Ensure full viewport height and no scrolling */}
      <div style={{
        maxWidth: '1200px',
        padding: '30px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#fff',
        marginBottom: '30px'
      }}> {/* Wider container */}
        <p style={{
          fontFamily: 'Arial, sans-serif',
          color: '#444',
          lineHeight: '1.8',
          fontSize: '1.2rem',
          textAlign: 'justify'
        }}>The outcome-led framework starts by identifying the development outcomes governments seek and then works backward to determine how public finance can contribute effectively to these goals. This visualization allows you to explore the framework and evidence collected from outcome studies.</p>
        <p style={{
          fontFamily: 'Arial, sans-serif',
          color: '#444',
          lineHeight: '1.8',
          fontSize: '1.2rem',
          textAlign: 'justify'
        }}>First, select a development outcome below. Then explore the public sector context for achieving the development outcome:</p>
        <ul style={{
          listStyleType: 'disc',
          paddingLeft: '20px',
          fontFamily: 'Arial, sans-serif',
          color: '#444',
          lineHeight: '1.8',
          fontSize: '1.2rem',
          textAlign: 'justify'
        }}>
          <li>A description of the policy outcome itself.</li>
          <li>The public sector results that contribute to the outcome and the public sector challenges that constrain countries from achieving them.</li>
          <li>The types of feasible policy and delivery capability needed to deliver the public sector results and overcome the challenges.</li>
        </ul>
        <p style={{
          fontFamily: 'Arial, sans-serif',
          color: '#444',
          lineHeight: '1.8',
          fontSize: '1.2rem',
          textAlign: 'justify'
        }}>Then explore the answers to the two questions posed by the outcome-led framework:</p>
        <ul style={{
          listStyleType: 'disc',
          paddingLeft: '20px',
          fontFamily: 'Arial, sans-serif',
          color: '#444',
          lineHeight: '1.8',
          fontSize: '1.2rem',
          textAlign: 'justify'
        }}>
          <li>What are the roles that public finance can play in achieving the outcome? Explore each of the four roles of public finance identified and country examples of these roles in practice.</li>
          <li>What are the bottlenecks which prevent this from happening? Explore each of the nine public finance bottlenecks identified and country examples of these roles in practice.</li>
        </ul>
        <p style={{
          fontFamily: 'Arial, sans-serif',
          color: '#444',
          lineHeight: '1.8',
          fontSize: '1.2rem',
          textAlign: 'justify'
        }}>Select a development outcome below to start exploring:</p>
      </div>
      <div className="tile-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', paddingTop: '20px' }}> {/* Adjusted icon positioning */}
        {tiles_custom.map((tile) => (
          <div
            key={tile.title}
            className="tile"
            style={{
              width: '220px',
              height: '200px',
              textAlign: 'center',
              cursor: 'pointer',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              backgroundColor: '#fff'
            }}
            onClick={() => handleNavigation(tile.title, tile.path)}
          >
            {tile.icon}
            <p style={{ margin: '10px 0', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#333' }}>{tile.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;