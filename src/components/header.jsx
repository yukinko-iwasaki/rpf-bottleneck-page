import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import OutcomeContext from '../OutcomeContext';

function Header() {
  const { outcome, setOutcome } = useContext(OutcomeContext);

  return (
    <header style={{
      width: '100%',
      padding: '10px 20px',
      backgroundColor: '#343a40', // Change to a darker shade
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#ffffff', // Adjust text color for better contrast
    }}>
      <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Reimagine Public Finance</h1>
      <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'italic' }}>{outcome}</h1>
      <nav>
        <Link to="/" onClick={() => { setOutcome(''); }} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '18px' }}> {/* Adjust link color */}
          <FaHome size={40} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
