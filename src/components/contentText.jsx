import React from "react";
import PropTypes from 'prop-types';

const createSampleText = (length = 50) =>{
    return Array.from({ length }, () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit.").join(" ");
}
const createText = (data) => {
    return (
        <div style={{ padding: '10px', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
            <p><span style={{ fontWeight: 'bold', color: '#4C9FD2' }}>Bottleneck:</span> {data.bottleneck}</p>
            <p><span style={{ fontWeight: 'bold', color: '#4C9FD2' }}>Description:</span> {data.outcome_bottleneck}</p>
            <p><span style={{ fontWeight: 'bold', color: '#4C9FD2' }}>Example:</span> {data.example}</p>
            <p style={{fontSize: '15px', fontStyle: 'italic'}}><span style={{  color: '#4C9FD2' }}>Reference:</span> {data.ref}</p>
            <p style={{fontSize: '15px', fontStyle: 'italic'}}><span style={{  color: '#4C9FD2' }}>Source:</span> {data.source}</p>
        </div>
    )
}
function ContentText(props) {
    const { data } = props;

    const sampleText = createSampleText(100)
    const text = createText(data)
    
    return (
        <div className="content-text" style={{ margin: '20px 0'}}>
            {text}
        </div>
    );
}
ContentText.propTypes = {
    data: PropTypes.string.isRequired,
};
export default ContentText;