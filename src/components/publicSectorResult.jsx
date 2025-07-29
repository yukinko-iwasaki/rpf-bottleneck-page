import React from "react";
import { useContext } from "react";
import OutcomeContext from "../OutcomeContext";
const data = require("../data/publicSectorResult.json");

function PublicSectorResult() {
    const { outcome } = useContext(OutcomeContext);
    const publicSectorResult = data[outcome] || {};
    return (
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            The public sector results which countries aim to deliver to achieve the outcome are: 
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff'
            }}>
                <h2 style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '20px'
                }}>{outcome}</h2>
                <p style={{
                    fontFamily: 'Roboto, sans-serif',
                    color: '#555',
                    lineHeight: '1.6',
                    fontSize: '1.1rem'
                }}>{publicSectorResult.result}</p>
            </div>
            The main public sector challenges in delivering these public sector results typically includes:
            <ul>
                {publicSectorResult.publicSectorChallenges && publicSectorResult.publicSectorChallenges.map((challenge, index) => (
                    <li key={index}>
                        <strong>{challenge.name}:</strong> {challenge.description}
                        <br />
                        <em>Source: {challenge.source}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PublicSectorResult;
    