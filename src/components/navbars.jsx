import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OutcomeContext from '../OutcomeContext';
import Content from './contenxt';
import CircleVisual from './circleVisual';
import verticalNavImg from '../assets/vertical-nav.png';

const HOVER_ZONES = [
  {
    id: 'outcome',
    className: 'top-zone',
  },
  {
    id: 'results',
    className: 'middle-zone',
  },
  {
    id: 'policy',
    className: 'bottom-zone',
  }
];

function VerticalNavbarPermanent() {
    const [selectedItem, setSelectedItem] = useState('outcome');
    const [topDivHeight, setTopDivHeight] = useState('55vh');
    const { outcome } = useContext(OutcomeContext);

    const handleVizClick = (event) => {
        const target = event.target.closest('g');
        if (!target) return;
        setSelectedItem(target.id);
        setTopDivHeight('40vh'); // Shrink when CircleVisual is clicked
    };

    const handleZoneClick = (zone) => {
        setSelectedItem(zone);
        setTopDivHeight('55vh'); // Expand when top nav is clicked
    };

    return (
        <Container fluid style={{ height: '100%' }}>
            <Row className="flex-nowrap" style={{ height: '100%' }}>
                {/* Sidebar Column */}
                <Col xs={12} md={3} lg={2}
                    className="bg-paper sidebar-wrapper-35 d-flex flex-column"
                    style={{
                      paddingTop: '20px',
                      gap: '20px'
                    }}>
                    <div style={{ 
                        width: '100%', 
                        height: topDivHeight,
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        position: 'relative',
                        transition: 'height 0.3s ease-in-out' // Add smooth transition
                    }}>
                        {/* Image Reveal with Hover Zones */}
                        <div className="reveal-image" style={{ width: '100%', height: '100%' }}>
                            {/* Hover zones */}
                            {HOVER_ZONES.map((zone) => (
                              <div
                                key={zone.id}
                                id={zone.id}
                                className={`hover-zone ${zone.className} ${selectedItem === zone.id ? 'selected' : ''}`}
                                onClick={() => handleZoneClick(zone.id)}
                              ></div>
                            ))}

                            {/* Masks */}
                            <div className="mask middle-mask"></div>
                            <div className="mask bottom-mask"></div>

                            {/* Image */}
                            <img 
                                src={verticalNavImg} 
                                alt='Vertical Navigation' 
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'contain',
                                    transition: 'all 0.3s ease-in-out'
                                }}
                            />
                        </div>
                    </div>
                    <CircleVisual onClick={handleVizClick} selectedItem={selectedItem} />
                </Col>
                <Content outcome={outcome} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
            </Row>
        </Container>
    );
}

export default VerticalNavbarPermanent;
