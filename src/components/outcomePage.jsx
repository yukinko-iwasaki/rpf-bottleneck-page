import React from 'react';
import OutcomeContext from '../OutcomeContext';
import { useContext } from 'react';
import { FaGraduationCap, FaChartLine, FaShieldAlt, FaLeaf, FaHeartbeat } from 'react-icons/fa';

import EducationImg from '../assets/E-WEB-Goal-04.png';
import EconomicResilienceImg from '../assets/E-WEB-Goal-01.png';
import GenderBasedViolenceImg from '../assets/E-WEB-Goal-05.png';
import RenewableEnergyImg from '../assets/E-WEB-Goal-07.png';
import UniversalHealthCareImg from '../assets/E-WEB-Goal-03.png';
const data = require('../data/devOutcome.json')

const imageMap = {
  "Education": EducationImg,
  "Economic Resilience": EconomicResilienceImg,
  "Gender-Based Violence": GenderBasedViolenceImg,
  "Renewable Energy": RenewableEnergyImg,
  "Universal Health Care": UniversalHealthCareImg
};

const iconMap = {
  "Education":  <div style={{ backgroundColor: 'pink', borderRadius: '50%', padding: '5px' }}><FaGraduationCap size={100} color='red' /></div>,
  "Economic Resilience":  <div style={{ backgroundColor: 'lightgreen', borderRadius: '50%', padding: '5px' }}><FaShieldAlt size={100} color='green' /></div>,
  "Gender-Based Violence":<div style={{ backgroundColor: 'lightgreen', borderRadius: '50%', padding: '5px' }}><FaShieldAlt size={100} color='green' /></div>,
  "Renewable Energy": <div style={{ backgroundColor: 'yellow', borderRadius: '50%', padding: '5px' }}><FaLeaf size={100} /></div>,
  "Universal Health Care": <div style={{ backgroundColor: 'lavender', borderRadius: '50%', padding: '5px' }}><FaHeartbeat color='purple' size={100} /></div>

}

function OutcomePage() {
    const { outcome } = useContext(OutcomeContext);
    const outcomeData = data[outcome] || {};
  return (
    <div style={{ padding: '40px', width: '100%', textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> {/* Center content */}
      {outcome && (
        <div style={{
          maxWidth: '900px',
          padding: '30px',
          border: '1px solid #ccc',
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}> {/* Center image and text */}
          <h2 style={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '25px'
          }}>{outcomeData.name}</h2>
          {/* <img src={imageMap[outcome]} alt={outcome} style={{ width: '250px', height: 'auto', marginBottom: '25px' }} /> Centered image */}
          {<div style={{
              width: '200px',
              marginBottom: '10px',
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
            }}>{iconMap[outcome]}</div> || <div style={{ width: '250px', height: 'auto', marginBottom: '25px' }}></div> /* Fallback if no icon is found */}
          <p style={{
            fontFamily: 'Arial, sans-serif',
            color: '#444',
            lineHeight: '1.8',
            fontSize: '1.2rem',
            textAlign: 'justify'
          }}>In {outcome}, the countries typically pursue the following <b>policy outcome:</b><br /><p style={{paddingTop:'20px'}}> {outcomeData.description}</p></p>
        </div>
      )}
    </div>
  );
}


export default OutcomePage;