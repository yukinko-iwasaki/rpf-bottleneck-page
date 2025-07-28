import React from 'react';
import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OutcomeContext from '../OutcomeContext';
import Content from './content'; // Assuming you have a Content component
import CircleVisual from './circleVisual';
import {ReactComponent as NavImage} from '../assets/nav.svg'; // Adjust the path as necessary
function VerticalNavbarPermanent() {
    const [selectedItem, setSelectedItem] = useState('');
    const { outcome } = useContext(OutcomeContext);

    const handleVizClick = (event) => {
        const target = event.target.closest('g');
        if (!target) return; // Ensure target is valid
        setSelectedItem(target.id); // Update selected item based on click
    }
  return (
    <Container fluid>
      <Row className="flex-nowrap"> {/* flex-nowrap prevents column wrapping */}
        {/* Sidebar Column */}
        <Col xs={12} md={3} lg={2} className="bg-light sidebar-wrapper-35">
          <div style={{ width: '100%', height: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <NavImage style={{ width: '100%', height: '100%' }} />
          </div>
          <CircleVisual onClick={handleVizClick} selectedItem={selectedItem} />

        </Col>
        <Content outcome={outcome} selectedItem={selectedItem} />

      </Row>

    </Container>
  );
}


export default VerticalNavbarPermanent;