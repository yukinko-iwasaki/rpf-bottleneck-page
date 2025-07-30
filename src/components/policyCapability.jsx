import React from "react";
import { useContext } from "react";
import OutcomeContext from "../OutcomeContext";
const data = require("../data/publicSectorResult.json");

function PolicyCapability() {
    const { outcome } = useContext(OutcomeContext);
    const policyData = data[outcome] || {};
    return (
        <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start' }}> {/* Center content */}
            <div style={{
                textAlign: 'left', /* Align text to the left */
                maxWidth: '900px',
                padding: '30px',
                border: '1px solid #ccc',
                overflow: 'scroll',
                height: '83vh',
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                backgroundColor: '#fff'
            }}> {/* Add container styling */}
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
            </div>
        </div>
    );
}

export default PolicyCapability;