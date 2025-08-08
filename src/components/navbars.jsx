import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
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
    const [selectedZone, setSelectedZone] = useState('top');
    const [arrowPosition, setArrowPosition] = useState({ left: 0, top: 0 });
    const { outcome } = useContext(OutcomeContext);

    useEffect(() => {
        const updateArrowPosition = () => {
            const element = selectedItem.startsWith('group') ? document.getElementById('group1') : document.getElementById(selectedItem);
            const sidebar = document.querySelector('.sidebar-wrapper-35');
            if (element && sidebar) {
                const left = element.getBoundingClientRect().left - sidebar.getBoundingClientRect().left - 35;
                const top = element.getBoundingClientRect().top - sidebar.getBoundingClientRect().top;
                setArrowPosition({ left, top });
            }
        };

        updateArrowPosition();
    }, [selectedItem]);

    const handleVizClick = (event) => {
        const target = event.target.closest('g');
        if (!target) return;
        setSelectedItem(target.id);
    };

    const handleZoneClick = (zone) => {
        setSelectedItem(zone);
    };

    return (
        <Container fluid style={{ height: '100%' }}>
            <Row className="flex-nowrap" style={{ height: '100%' }}>
                {/* Sidebar Column */}
                <Col xs={12} md={3} lg={2} className="bg-paper sidebar-wrapper-35">
                    <div style={{ 
                        width: '100%', 
                        height: '40vh', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        position: 'relative'
                    }}>
                        {/* Image Reveal with Hover Zones */}
                        <div className="reveal-image" style={{ width: '100%', height: '100%' }}>
                            {/* Hover zones */}
                            {HOVER_ZONES.map((zone) => (
                              <div
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
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
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
