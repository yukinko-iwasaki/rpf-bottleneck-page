import React from "react";
import { useContext } from "react";
import OutcomeContext from "../OutcomeContext";
import { Container, Card } from 'react-bootstrap';

const data = require("../data/publicSectorResult.json");

function PolicyCapability() {
    const { outcome } = useContext(OutcomeContext);
    const policyData = data[outcome] || {};
    return (
      <Container className="d-flex justify-content-center">
        <Card className="w-100" style={{ maxWidth: '900px' }}>
          <Card.Body className="text-start">
                <h5 style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '25px'
                }}>Policy Capability for {outcome}</h5>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    color: '#444',
                    lineHeight: '1.8',
                    fontSize: '1.0rem',
                    textAlign: 'justify'
                }}>Making significant progress to deliver the policy outcome and public sector results demands a combination of both feasible policy and delivery capabilities.</p>
                <h5 style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                    color: '#333',
                    marginTop: '35px',
                    marginBottom: '15px'
                }}>Feasible Policy:</h5>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    color: '#444',
                    lineHeight: '1.8',
                    fontSize: '1.0rem',
                    textAlign: 'justify'
                }}>{policyData.feasiblePolicy}</p>
                <h5 style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                    color: '#333',
                    marginTop: '35px',
                    marginBottom: '15px'
                }}>Delivery Capabilities:</h5>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    color: '#444',
                    lineHeight: '1.8',
                    fontSize: '1.0rem',
                    textAlign: 'justify'
                }}>{policyData.effectiveDelivery}</p>
          </Card.Body>
        </Card>
      </Container>
    );
}

export default PolicyCapability;
