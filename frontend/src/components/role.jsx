import React from "react";
import PropTypes from 'prop-types';
import ContentText from "./contentText";
import Accordion from 'react-bootstrap/Accordion';

function Roles({ selectedItem, rolesData }) {


  const data = rolesData[selectedItem]?.child || [];
  const role_name = rolesData[selectedItem]?.name || '';
  const SHOW_EVIDENCE = process.env.REACT_APP_SHOW_EXAMPLES === 'True';
  return (
    <>
      {selectedItem && (
        <div className="container p-4 mb-4 border rounded shadow bg-white text-start" style={{ maxWidth: '900px' }}>
          <p className="mb-2">The outcome-led framework identifies four broad roles that public finance plays in the achievement of public sector results as it interacts with broader public policy and public sector institutions.'</p>
          <p className="mb-1">You have selected:</p>
          <p className="fw-bold">{role_name}</p>
        </div>
      )}

      <div className="pt-4">
        <div className="container text-start">
          <p className="fw-bold ps-2">This role contributes to the sector outcome as follows:</p>
            <Accordion className="mb-4">
              {Object.keys(data).map((roleName, index) => {
                if (roleName === 'name') return null; // Skip the 'name' key
                const roleData = data[roleName].child || [];
                const role_name = data[roleName]?.['name'] || '';
                return (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{role_name}</Accordion.Header>
                    <Accordion.Body>
                    <div style={{ fontWeight: 'bold', paddingBottom: '10px' }}>Examples: </div> 
                      {roleData.map((item, index) => {
                        const title = item['Outcome role'];
                            const example = item["Description of  Examples where Roles have been played"]
                            const exampleRef = item["References"]
                            const source = item["Source"]
                        return (
                          <div key={index} style={{ padding: '10px', lineHeight: '1.2', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                            <div style={{ width:'100%'}}>
                                <p><span style={{'fontWeight':'bold'}}>{title}</span></p>
                            </div>
                            <ContentText show={true} example={example} exampleRef={exampleRef} source={source} />
                          </div>
                        );
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>

        </div>
      </div>
    </>
  );
}

Roles.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  rolesData: PropTypes.any,
};

export default Roles;
