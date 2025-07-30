import React from "react";
import { useContext } from "react";
import OutcomeContext from "../OutcomeContext";
const data = require("../data/publicSectorResult.json");

function PublicSectorResult() {
    const { outcome } = useContext(OutcomeContext);
    const publicSectorResult = data[outcome] || {};
    return (
        <> {/* Center content */}
            <div style={{
                padding: '20px',
                height:'83vh',
                overflow:'scroll',
                border: '1px solid #ccc',
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                backgroundColor: '#fff'
            }}> {/* Add container styling */}
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
            </div>
        </>
    );
}

export default PublicSectorResult;
