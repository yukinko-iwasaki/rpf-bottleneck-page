import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OutcomeContext from '../OutcomeContext';
import Content from './content';
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
        setTopDivHeight('35vh'); // Shrink when CircleVisual is clicked
    };

    const handleZoneClick = (zone) => {
        setSelectedItem(zone);
        setTopDivHeight('55vh'); // Expand when top nav is clicked
    };

    return (
        <Container fluid style={{ height: 'calc(100vh - 60px)', padding: 0 }}>
            <Row className="h-100">
                {/* Sidebar Column */}
                <Col xs={12} md={4} lg={4}
                    className="bg-paper d-flex flex-column h-100"
                    style={{ gap: '30px', padding: '20px 0' }}>
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
                        <div className="reveal-image" style={{ width: '60%', height: '100%' }}>
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
                <Col xs={12} md={8} lg={8} className="h-100" style={{ overflowY: 'auto' }}>
                  <Content outcome={outcome} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
                </Col>
            </Row>
        </Container>
    );
}

export default VerticalNavbarPermanent;
