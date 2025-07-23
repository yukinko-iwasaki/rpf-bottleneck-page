import React, { useEffect } from "react";
import { useState, useRef } from "react";
import PropTypes from 'prop-types';
import CustomFilter from "./filter";
import ContentText from "./contentText";

const data = require('../data/bottleneck.json');


const bottlenectDict = {
  'group1': {
    name: "1. Insufficient Stakeholder Commitment to Policy Action",
    children: [
      "1.1 Inadequate commitment of political and technical leadership to policy action and associated resource mobilization and use within or across sectors",
      "1.2 Inadequately broad-based stakeholder involvement, understanding and support for policy action and associated resource mobilization and use",
    ],
  },
  'group2': {
    name: "2. Incoherent, fragmented and poorly prioritized policy",
    children: [
      "2.1 Fragmented, over ambitious, inconsistent, uncoordinated and poorly prioritized policies across or within sectors",
    ],
  },
  'group3': {
    name: "3. Mismatch between policy goals, priorities, capability and resources",
    children: [
      "3.1 Domestic revenue policies generate insufficient resources to achieve policy goals given fiscal reality",
      "3.2 Public policy goals and delivery models are unaffordable given current and future costs and fiscal reality.",
      "3.3 Policies do not take into account context, including the available organizational capability to achieve goals",
    ],
  },
  'group4': {
    name: "4. Unsustainable fiscal situation of governments and organizations",
    children: [
      "4.1 Short term incentives and perspectives leads to a failure to manage fiscal risks and procyclical spending which forces deep cuts during downturns",
      "4.2 Biased or inaccurate fiscal forecasting and unpredictable, volatile resource flows result in budgets being under funded.",
      "4.3 Un-strategic, ad hoc and supply driven debt management contributes to unsustainable fiscal situations and burdens",
      "4.4 Pre-existing spending commitments and debt burdens create limited fiscal space and options for fiscal consolidation and/or increasing fiscal space.",
    ],
  },
  'group5': {
    name: "5. Inadequate and inequitable resources mobilized and deployed for policy implementation",
    children: [
      "5.1 Fragmented, uncoordinated and poorly prioritized policies across or within sectors",
      "5.2 Limited or costly financing mobilized for investment and service delivery",
      "5.3 Resource deployment is often incremental and disconnected from public policy priorities",
      "5.4 Resource deployment is not informed by demand for, the costs of or effectiveness of achieving public policy objectives.",
    ],
  },
  'group6': {
    name: "6. Unreliable, delayed and fragmented funding for delivery",
    children: [
      "6.1 Ad hoc, political and fragmented funding channels contribute to unreliable and insufficient funding",
      "6.2 Intergovernmental financing systems for delivery are often inefficient, unbalanced and uncoordinated between levels of government.",
      "6.3 Shortfalls, delays and diversion of funding for delivery",
    ],
  },
  'group7': {
    name: "7. Inefficient deployment and management of resources and inputs for delivery",
    children: [
      "7.1 Resource deployment is inefficient overall due to high overheads and unbalanced allocations to delivery inputs and sectoral programs",
      "7.2 Inefficient public investment decisions and management of assets",
      "7.3 High cost, inefficient deployment, poor motivation and inadequate skills of human resources for delivery",
      "7.4 Limited availability of operational funding to regulate and run services and maintain infrastructure and other assets.",
      "7.5 High cost and inflated cost of procurement for infrastructure and operational inputs.",
    ],
  },
  'group8': {
    name: "8. Insufficient, opaque and fragmented management, oversight, transparency and accountability systems and arrangements",
    children: [
      "8.1 The design of regulatory, incentive, control and management systems limits autonomy and discourages performance",
      "8.2 Inconsistent application or enforcement of regulatory, PFM and public sector management systems undermine performance and accountability",
      "8.3 Weaknesses in fiscal governance undermine public and private sector accountability.",
    ],
  },
  'group9': {
    name: "9. Inadequate availability and use of data in decision making, policy delivery and accountability",
    children: [
      "9.1 Inadequate transparency, oversight, monitoring, evaluation and accountability for resources and performance",
      "9.2 Available financial and non-financial information not used for decision making, management and accountability",
      "9.3 Data systems are weak or poor quality information, are fragmented and do not interoperate.",
    ],
  },
};

const roleDict = {
  'groupA': { name: 'Insufficient Stakeholder Commitment to Policy Action' },
  'groupB': { name: 'Unsustainable fiscal situation of governments and organizations' },
  'groupC': { name: 'Inadequate and inequitable resources mobilized and deployed for policy implementation' },
  'groupD': { name: 'Insufficient, opaque and fragmented management, oversight, transparency and accountability systems and arrangements' }
};
function Content(props){
    const {outcome, selectedItem} = props;




    const viz_type = Object.keys(bottlenectDict).includes(selectedItem) ? 'bottleneck group' : 'roles'; // Default to group1 if viz_type is not found
    const type_options = viz_type === 'bottleneck group' ?bottlenectDict[selectedItem].children: [];
    const selectedItemDisplay = bottlenectDict[selectedItem]?.name || roleDict[selectedItem]?.name || 'group1'; // Default to group1 if not found

    return (
        <div className="content" style={{width:'65%'}}>
        <h2>{outcome} - {viz_type} - {selectedItemDisplay}</h2>

       <div className="test">
            <div style={{"display":'flex'}}>
                 {viz_type== 'bottleneck group' && <CustomFilter 
                    filterType={'Bottleneck'}
                    filterOptions={type_options}
                    onFilterChange={(selected) => console.log(`Selected outcome: ${selected}`)}/>}
            </div>
        </div>
        <div class='container' style={{"display": 'flex', height: '50vh'}}>
            <div className="textContainer" style={{"width": '100%', "maxHeight": '80%', 'overflow':'scroll','boxShadow':'0px 4px 8px rgba(0, 0, 0, 0.1)', 'backgroundColor': 'rgba(76, 159, 210, 0.1)', 'borderRadius': '8px', 'padding': '10px', 'border': '1px solid rgba(76, 159, 210, 0.5)'}}>
                {data.map((text, index) => (
                    <div key={index} style={{ borderBottom: '1px solid rgba(76, 159, 210, 0.3)', paddingBottom: '10px', marginBottom: '10px' }}>
                        <ContentText data={text} />
                    </div>
                ))
                }
            </div>
        </div>
        {/* You can replace the above line with any other visualization component based on viz_type */}
        <p>This is the content area for {outcome} with visualization type {viz_type}.</p>
        {/* Additional content can be added here */}
        </div>
    );
}

Content.propTypes = {
    outcome: PropTypes.string.isRequired,
    viz_type: PropTypes.string.isRequired,
    selectedItem: PropTypes.string.isRequired, // Added selectedItem prop type
};

export default Content;