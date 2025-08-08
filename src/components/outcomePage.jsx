import React from 'react';
import OutcomeContext from '../OutcomeContext';
import { useContext } from 'react';
import { Container, Card, Image, Row, Col } from 'react-bootstrap';

import EducationImg from '../assets/icon-education.svg';
import EconomicResilienceImg from '../assets/icon-resilience.svg';
import GenderBasedViolenceImg from '../assets/icon-gbv.svg';
import RenewableEnergyImg from '../assets/icon-energy.svg';
import UniversalHealthCareImg from '../assets/icon-health.svg';

const data = require('../data/devOutcome.json')

const imageMap = {
  "Education": EducationImg,
  "Economic Resilience": EconomicResilienceImg,
  "Gender-Based Violence": GenderBasedViolenceImg,
  "The Energy Transition": RenewableEnergyImg,
  "Universal Healthcare": UniversalHealthCareImg
};

function OutcomePage() {
  const { outcome } = useContext(OutcomeContext);
  const outcomeData = data[outcome] || {};

  return (
    <Container className="d-flex justify-content-center my-4">
      {outcome && (
        <Card className="w-100" style={{ maxWidth: '900px' }}>
          <Card.Body className="text-center">
            <Card.Title as="h2" className="mb-4 fw-bold text-dark">
              {outcomeData.name}
            </Card.Title>

            <Row className="justify-content-center mb-4">
              <Col xs={6} md={4}>
                <div style={{
                  width: '180px',
                  height: '190px',
                  overflow: 'hidden',
                  margin: '0 auto'
                }}>
                  <Image
                    src={imageMap[outcome]}
                    alt={outcome}
                    fluid
                    style={{ width: '100%' }}
                  />
                </div>
              </Col>
            </Row>

            <Card.Text className="text-start text-secondary lh-lg fs-5">
              In {outcome}, the countries typically pursue the following <strong>policy outcome:</strong>
              <p className="mt-3">{outcomeData.description}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}


export default OutcomePage;
