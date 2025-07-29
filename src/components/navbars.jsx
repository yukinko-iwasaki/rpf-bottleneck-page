import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OutcomeContext from '../OutcomeContext';
import Content from './contenxt';
import CircleVisual from './circleVisual';
import {ReactComponent as NavImage} from '../assets/nav.svg'; // Adjust the path as necessary
function VerticalNavbarPermanent() {
    const [selectedItem, setSelectedItem] = useState('outcome');
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
        if (!target) return; // Ensure target is valid
        setSelectedItem(target.id); // Update selected item based on click
    };

    return (
        <Container fluid style={{ height: '100%' }}>
            <Row className="flex-nowrap" style={{ height: '100%' }}> {/* flex-nowrap prevents column wrapping */}
                {/* Sidebar Column */}
                <Col xs={12} md={3} lg={2} className="bg-light sidebar-wrapper-35">
                    <div style={{ width: '100%', height: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}> {/* Added relative positioning */}
                        <NavImage style={{ width: '100%', height: '100%' }} onClick={handleVizClick} />
                        {/* Add red arrow indicator */}
                        {selectedItem && (
                            <div style={{
                                position: 'absolute',
                                left: `${arrowPosition.left}px`,
                                top: `${arrowPosition.top}px`,
                                width: '20px',
                                height: '20px',
                                backgroundColor: 'red',
                                clipPath: 'polygon(0 0, 100% 50%, 0 100%)' // Create arrow shape
                            }}></div>
                        )}
                    </div>
                    <CircleVisual onClick={handleVizClick} selectedItem={selectedItem} />
                </Col>
                <Content outcome={outcome} selectedItem={selectedItem} />
            </Row>
        </Container>
    );
}


export default VerticalNavbarPermanent;