import React from "react";
import PropTypes from 'prop-types';
import ContentText from "./contentText";
import Accordion from 'react-bootstrap/Accordion';

function Bottlenecks({ selectedItem, bottleneckData }) {


  const data = bottleneckData[selectedItem] || [];
  const bottleneck_group = bottleneckData[selectedItem]?.name || '';
  const SHOW_EVIDENCE = process.env.REACT_APP_SHOW_EXAMPLES === 'True';
  return (
    <>
      {selectedItem && (
        <div className="container p-4 mb-4 border rounded shadow bg-white text-start" style={{ maxWidth: '900px' }}>
          <p className="mb-2">'The outcome-led framework then identifies nine common bottlenecks which undermine the potential role of public finance across development outcomes.'</p>
          <p className="mb-1">You have selected:</p>
          <p className="fw-bold">{bottleneck_group}</p>
        </div>
      )}

      <div className="pt-4">
        <div className="container text-start">
          <p className="fw-bold ps-2">This typically constrains the achievement of public sector results as follows:</p>
            <Accordion className="mb-4">
              {Object.keys(data).map((bottleneckName, index) => {
                if (bottleneckName === 'name') return null; // Skip the 'name' key
                const bottleneckData = data[bottleneckName] || [];
                const bottleneck_name = data[bottleneckName]?.['name'] || '';
                return (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{bottleneck_name}</Accordion.Header>
                    <Accordion.Body>
                      {Object.keys(bottleneckData).map((bottleneck_outcome, index) => {
                            const item = bottleneck_outcome !== 'name' ? bottleneckData[bottleneck_outcome] : [];
                        return (
                          item.length > 0 && <div key={index} style={{ padding: '10px', lineHeight: '1.2', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                            <div style={{ width:'100%'}}>
                                <p><span style={{'fontWeight':'bold'}}>{bottleneck_outcome}</span></p>
                            </div>
                            <div style={{ fontWeight: 'bold', paddingBottom: '10px' }}>Examples: </div> 
                            {
                              item.map((example, index) => {
                                const exampleText = example["Description of  Examples of Bottlenecks"];
                                const exampleRef = example["References"];
                                const source = example["Source"];
                                return (
                                  <ContentText show={true} example={exampleText} exampleRef={exampleRef} source={source} key={index} />
                                );
                              })
                            }
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

Bottlenecks.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  data: PropTypes.any,
};

export default Bottlenecks;
