import React from "react";
import PropTypes from 'prop-types';
import CustomFilter from "./filter";
import WorldChoroplethMap from "./map"; // Assuming you have a map component
import ContentText from "./contentText";
const data = require('../data/bottleneck.json');

function Content(props){
    const {viz_type, outcome} = props;
    return (
        <div className="content" style={{maxWidth:"80%"}}>
        <h2>{outcome} - {viz_type}</h2>
        <div className="test">
            <div style={{"display":'flex'}}>
                 <CustomFilter 
                    filterType={outcome}
                    filterOptions={outcome=='roles' ? ['Role1', 'Role2'] : ['Bottleneck1', 'Bottleneck2']}
                    onFilterChange={(selected) => console.log(`Selected outcome: ${selected}`)}/>
                <CustomFilter 
                    filterType="Country"
                    filterOptions={['Albania', 'Kenya', 'South Africa']}
                    onFilterChange={(selected) => console.log(`Selected outcome: ${selected}`)}/>
                <CustomFilter 
                    filterType="sources"
                    filterOptions={['source1', 'source2', 'source2']}
                    onFilterChange={(selected) => console.log(`Selected outcome: ${selected}`)}/>
            </div>
            <div className="map-container">
                 <WorldChoroplethMap />
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
    viz_type: PropTypes.string.isRequired
};

export default Content;