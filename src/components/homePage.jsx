import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import OutcomeContext from '../OutcomeContext';

// Import images
import EducationImg from '../assets/icon-education.svg';
import EconomicResilienceImg from '../assets/icon-resilience.svg';
import GenderBasedViolenceImg from '../assets/icon-gbv.svg';
import RenewableEnergyImg from '../assets/icon-energy.svg';
import UniversalHealthCareImg from '../assets/icon-health.svg';
import frameworkImg from '../assets/framework.jpg';

function HomePage() {
  const { setOutcome } = useContext(OutcomeContext);
  const navigate = useNavigate();

  const handleNavigation = (newOutcome, path) => {
    setOutcome(newOutcome);
    navigate(path);
  };

  const tiles_custom = [
    {
      title: 'Education',
      icon: EducationImg,
      path: '/Education'
    },
    {
      title: 'Economic Resilience',
      icon: EconomicResilienceImg,
      path: '/EconomicResilience'
    },
    {
      title: 'Gender-Based Violence',
      icon: GenderBasedViolenceImg,
      path: '/GenderBasedViolence'
    },
    {
      title: 'The Energy Transition',
      icon: RenewableEnergyImg,
      path: '/RenewableEnergy'
    },
    {
      title: 'Universal Healthcare',
      icon: UniversalHealthCareImg,
      path: '/UniversalHealthCare'
    },
  ];

  return (
    <div className="home-page" style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={frameworkImg} alt="framework" style={{ width: '85%', marginBottom: '20px' }} />
      <div style={{
        maxWidth: '1200px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#fff',
        marginBottom: '30px'
      }}> {/* Wider container */}
        <p style={{
          fontFamily: 'Arial, sans-serif',
          color: '#444',
          lineHeight: '1.4',
          fontSize: '1.0rem',
          textAlign: 'justify'
        }}>The outcome-led framework starts by identifying the development outcomes governments seek and then works backward to determine how public finance can contribute effectively to these goals. This visualization allows you to explore the framework and evidence collected from outcome studies.</p>
        <p style={{
          fontFamily: 'Arial, sans-serif',
          color: '#444',
          lineHeight: '1.4',
          fontSize: '1.0rem',
          textAlign: 'justify'
        }}>First, select a development outcome below. Then explore the public sector context for achieving the development outcome:</p>
        <ul style={{
          listStyleType: 'disc',
          paddingLeft: '20px',
          fontFamily: 'Arial, sans-serif',
          color: '#444',
          lineHeight: '1.4',
          fontSize: '1.0rem',
          textAlign: 'justify'
        }}>
          <li>A description of the policy outcome itself.</li>
          <li>The public sector results that contribute to the outcome and the public sector challenges that constrain countries from achieving them.</li>
          <li>The types of feasible policy and delivery capability needed to deliver the public sector results and overcome the challenges.</li>
        </ul>
        <p style={{
          fontFamily: 'Arial, sans-serif',
          color: '#444',
          lineHeight: '1.4',
          fontSize: '1.0rem',
          textAlign: 'justify'
        }}>Then explore the answers to the two questions posed by the outcome-led framework:</p>
        <ul style={{
          listStyleType: 'disc',
          paddingLeft: '20px',
          fontFamily: 'Arial, sans-serif',
          color: '#444',
          lineHeight: '1.4',
          fontSize: '1.0rem',
          textAlign: 'justify'
        }}>
          <li><i>What are the roles that public finance can play in achieving the outcome?</i> <br/>Explore each of the four roles of public finance identified and country examples of these roles in practice.</li>
          <li><i>What are the bottlenecks which prevent this from happening?</i> <br/>Explore each of the nine public finance bottlenecks identified and country examples of these roles in practice.</li>
        </ul>
 
      </div>
      <p style={{
          fontFamily: 'Arial, sans-serif',
          color: '#444',
          lineHeight: '1.8',
          fontSize: '1.0rem',
          textAlign: 'justify'
        }}>Select a development outcome below to start exploring:</p>

      <div className="tile-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', paddingTop: '10px' }}>
        {tiles_custom.map((tile) => (
          <div
            key={tile.title}
            className="tile"
            style={{
              width: '150px',
              height: '120px',
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
            <img src={tile.icon} alt={tile.tile} style={{ width: '100%', height: '90%' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
