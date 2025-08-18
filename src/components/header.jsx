import React from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import OutcomeContext from '../OutcomeContext';

import EducationImg from '../assets/icon-education.svg';
import EconomicResilienceImg from '../assets/icon-resilience.svg';
import GenderBasedViolenceImg from '../assets/icon-gbv.svg';
import RenewableEnergyImg from '../assets/icon-energy.svg';
import UniversalHealthCareImg from '../assets/icon-health.svg';

const imageMap = {
  "Education": EducationImg,
  "Economic Resilience": EconomicResilienceImg,
  "Gender-Based Violence": GenderBasedViolenceImg,
  "The Energy Transition": RenewableEnergyImg,
  "Universal Healthcare": UniversalHealthCareImg
};

function Header() {
  const { outcome, setOutcome } = useContext(OutcomeContext);
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4 shadow">
      <Container fluid>
        <Navbar.Brand as={Link} 
          to="/" 
          onClick={() => setOutcome('')}
          className="fw-bold fs-3 me-auto text-white text-decoration-none"
        >
          Reimagine Public Finance
        </Navbar.Brand>

        {outcome && (
          <div className="d-flex justify-content-center align-items-center mx-auto">
            <div className="d-flex align-items-center">
              <div
                className="bg-white rounded-circle overflow-hidden me-3"
                style={{ width: '40px', height: '40px', padding: '3px' }}>
                <Image src={imageMap[outcome]} alt={outcome} fluid className="w-100" />
              </div>
              <span className="text-white fs-5">{outcome}</span>
            </div>
          </div>
        )}

        <Nav className="ms-auto">
          {location.pathname !== "/" && (
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => setOutcome('')}
              className="text-white p-0"
            >
              <FaHome size={24} />
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
