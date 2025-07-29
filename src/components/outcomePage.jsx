import React from 'react';
import OutcomeContext from '../OutcomeContext';
import { useContext } from 'react';
const data = require('../data/devOutcome.json')

function OutcomePage() {
    const { outcome } = useContext(OutcomeContext);
    const outcomeData = data[outcome] || {};
  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {outcome && (
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff'
        }}>
          <h2 style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px'
          }}>{outcomeData.name}</h2>
          <p style={{
            fontFamily: 'Roboto, sans-serif',
            color: '#555',
            lineHeight: '1.6',
            fontSize: '1.1rem'
          }}>{outcomeData.description}</p>
        </div>
      )}
    </div>
  );
}


export default OutcomePage;