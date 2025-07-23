import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './content'; // Assuming you have a Content component
import CircleVisual from './circleVisual';
import {ReactComponent as MapSvg} from '../assets/map.svg'; // Adjust the path as necessary
function VerticalNavbarPermanent(props) {
    const [selectedItem, setSelectedItem] = useState('group1');

    const handleVizClick = (event) => {
        const target = event.target.closest('g');
        if (!target) return; // Ensure target is valid
        setSelectedItem(target.id); // Update selected item based on click
    }
    const {outcome} = props;
  return (
    <Container fluid>
      <Row className="flex-nowrap"> {/* flex-nowrap prevents column wrapping */}
        {/* Sidebar Column */}
        <Col xs={12} md={3} lg={2} className="bg-light sidebar-wrapper-35">
          <CircleVisual onClick={handleVizClick} selectedItem={selectedItem} />
          <div style={{ width: '100%', borderRadius: '100px', overflow: 'hidden' }}>
            <MapSvg />
          </div>
        </Col>
        <Content outcome={outcome} selectedItem={selectedItem} />

      </Row>

    </Container>
  );
}

VerticalNavbarPermanent.propTypes = {
    viz_type: PropTypes.string.isRequired,
};
export default VerticalNavbarPermanent;