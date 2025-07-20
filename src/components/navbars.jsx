import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './content'; // Assuming you have a Content component


function VerticalNavbarPermanent(props) {
    const [outcome, setOutcome] = useState('Health'); // Default outcome
    const handleSelect = (eventKey) => {
        setOutcome(eventKey);
    }
    const {viz_type} = props;
  return (
    <Container fluid>
      <Row className="flex-nowrap"> {/* flex-nowrap prevents column wrapping */}
        {/* Sidebar Column */}
        <Col xs={12} md={3} lg={2} className="bg-light sidebar-wrapper">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

            <hr className="d-none d-sm-block w-100" /> {/* Separator */}

            {/* Navigation Links */}
            <Nav className="nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100" id="menu" onSelect={(o)=>handleSelect(o)}>
              <Nav.Item className="w-100">
                <Nav.Link eventKey="Education" className="text-dark px-2">
                  <i className="bi bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Education</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="w-100">
                <Nav.Link eventKey="EconomicResilience" className="text-dark px-2">
                  <i className="bi bi-table"></i> <span className="ms-1 d-none d-sm-inline">Economic Resilience</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="w-100">
                <Nav.Link eventKey="Outcome3" className="text-dark px-2">
                  <i className="bi bi-people"></i> <span className="ms-1 d-none d-sm-inline">Outcome3</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <hr className="d-none d-sm-block w-100" /> {/* Separator */}
          </div>
        </Col>
        <Content outcome={outcome} viz_type={viz_type} />

      </Row>
    </Container>
  );
}

VerticalNavbarPermanent.propTypes = {
    viz_type: PropTypes.string.isRequired,
};
export default VerticalNavbarPermanent;