import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import OutcomeContext from '../OutcomeContext';

import EducationImg from '../assets/E-WEB-Goal-04.png';
import EconomicResilienceImg from '../assets/E-WEB-Goal-01.png';
import GenderBasedViolenceImg from '../assets/E-WEB-Goal-05.png';
import RenewableEnergyImg from '../assets/E-WEB-Goal-07.png';
import UniversalHealthCareImg from '../assets/E-WEB-Goal-03.png';

const imageMap = {
  "Education": EducationImg,
  "Economic Resilience": EconomicResilienceImg,
  "Gender-Based Violence": GenderBasedViolenceImg,
  "Renewable Energy": RenewableEnergyImg,
  "Universal Health Care": UniversalHealthCareImg
};

function Header() {
  const { outcome, setOutcome } = useContext(OutcomeContext);



  return (
    <header style={{
      width: '100%',
      paddingLeft: '50px',
      paddingRight: '50px',
      height: '70px',
      backgroundColor: '#343a40', // Change to a darker shade
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#ffffff', // Adjust text color for better contrast
    }}>
      <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Reimagine Public Finance</h1>
      {outcome && <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'italic' }}>{outcome}</h1>}
      <nav>
        <Link to="/" onClick={() => { setOutcome(''); }} style={{ textDecoration: 'none', color: '#ffffff', fontSize: '18px' }}> {/* Adjust link color */}
          <FaHome size={40} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
