import React from 'react';
import OutcomeContext from '../OutcomeContext';
import { useContext } from 'react';

import EducationImg from '../assets/icon-education.svg';
import EconomicResilienceImg from '../assets/icon-resilience.svg';
import GenderBasedViolenceImg from '../assets/icon-gbv.svg';
import RenewableEnergyImg from '../assets/icon-energy.svg';
import UniversalHealthCareImg from '../assets/icon-health.svg';

const data = require('../data/devOutcome.json')

const imageMap = {
  "Education": EducationImg,
  "Economic Resilience": EconomicResilienceImg,
  "Gender-Based Violence": GenderBasedViolenceImg,
  "The Energy Transition": RenewableEnergyImg,
  "Universal Healthcare": UniversalHealthCareImg
};

function OutcomePage() {
  const { outcome } = useContext(OutcomeContext);
  const outcomeData = data[outcome] || {};
  return (
    <> {/* Center content */}
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
          <div style={{
            width: '200px',
            height: '180px',
            overflow: 'hidden',
          }}>
            <img src={imageMap[outcome]} alt={outcome} style={{ width: '85%' }}/>
          </div>
          <p style={{
            fontFamily: 'Arial, sans-serif',
            color: '#444',
            lineHeight: '1.8',
            fontSize: '1.2rem',
            textAlign: 'justify'
          }}>In {outcome}, the countries typically pursue the following <b>policy outcome:</b><br /><p style={{paddingTop:'20px'}}> {outcomeData.description}</p></p>
        </div>
      )}
    </>
  );
}


export default OutcomePage;
