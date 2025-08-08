import React from "react";
import { useContext } from "react";
import { Container, Card } from 'react-bootstrap';
import OutcomeContext from "../OutcomeContext";
const data = require("../data/publicSectorResult.json");

function PublicSectorResult() {
    const { outcome } = useContext(OutcomeContext);
    const publicSectorResult = data[outcome] || {};
    return (
      <Container className="d-flex justify-content-center">
        <Card className="w-100" style={{ maxWidth: '900px' }}>
          <Card.Body className="text-left">
                <h5 style={{
                    textAlign: 'left', /* Align text to the left */
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '20px'
                }}>The public sector results which countries aim to deliver to achieve the outcome are: </h5>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    color: '#444',
                    lineHeight: '1.8',
                    fontSize: '1.0rem',
                    textAlign: 'left' /* Align text to the left */
                }}>{publicSectorResult.result}</p>
                <h5 style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                    color: '#333',
                    marginTop: '35px',
                    marginBottom: '25px',
                    textAlign: 'left' /* Align text to the left */
                }}>The main public sector challenges in delivering these public sector results typically include:</h5>
                <ul style={{
                    listStyleType: 'disc',
                    paddingLeft: '20px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#444',
                    lineHeight: '1.8',
                    fontSize: '1.0rem',
                    textAlign: 'left' /* Align text to the left */
                }}>
                    {publicSectorResult.publicSectorChallenges && publicSectorResult.publicSectorChallenges.map((challenge, index) => (
                        <li key={index} style={{ marginBottom: '15px' }}>
                            <strong style={{ color: '#333' }}>{challenge.name}</strong> <br/>{challenge.description}
                            <br />
                            <em style={{ color: '#777' }}>Source: {challenge.source}</em>
                        </li>
                    ))}
                </ul>
          </Card.Body>
        </Card>
    </Container>
  );
}

export default PublicSectorResult;
