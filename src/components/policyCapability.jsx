import React from "react";
import { useContext } from "react";
import OutcomeContext from "../OutcomeContext";
const data = require("../data/publicSectorResult.json");

function PolicyCapability() {
    const { outcome } = useContext(OutcomeContext);
    const policyData = data[outcome] || {};
    return (
        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> {/* Center content */}
            <div style={{
                maxWidth: '900px',
                padding: '30px',
                border: '1px solid #ccc',
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                backgroundColor: '#fff'
            }}> {/* Add container styling */}
                <h2 style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '25px'
                }}>Policy Capability for {outcome}</h2>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    color: '#444',
                    lineHeight: '1.8',
                    fontSize: '1.2rem',
                    textAlign: 'justify'
                }}>Making significant progress to deliver the policy outcome and public sector results demands a combination of both feasible policy and delivery capabilities.</p>
                <h3 style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                    color: '#333',
                    marginTop: '35px',
                    marginBottom: '15px'
                }}>Feasible Policy:</h3>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    color: '#444',
                    lineHeight: '1.8',
                    fontSize: '1.2rem',
                    textAlign: 'justify'
                }}>{policyData.feasiblePolicy}</p>
                <h3 style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                    color: '#333',
                    marginTop: '35px',
                    marginBottom: '15px'
                }}>Delivery Capabilities:</h3>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    color: '#444',
                    lineHeight: '1.8',
                    fontSize: '1.2rem',
                    textAlign: 'justify'
                }}>{policyData.effectiveDelivery}</p>
            </div>
        </div>
    );
}

export default PolicyCapability;