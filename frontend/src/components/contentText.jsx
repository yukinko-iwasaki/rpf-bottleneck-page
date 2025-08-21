import React from "react";
import PropTypes from 'prop-types';

const createSampleText = (length = 50) =>{
    return Array.from({ length }, () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit.").join(" ");
}

const COUNTRIES = ["Rwanda"]
const anonymizeCountry = (text) => {
    COUNTRIES.forEach(country => {
        const regex = new RegExp(`\\b${country}\\b`, 'gi');
        text = text.replace(regex, "[REDACTED]");
    });
    return text;
}

const createText = (data, viz_type) => {
    let title = null
    if (viz_type === 'Bottleneck Group'){
        title = data.outcomeBottleneck || data.description
    }
    return (
        <div style={{ padding: '10px', lineHeight: '1.2', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
            <div style={{ width:'100%'}}>
                <p><span style={{'fontWeight':'bold'}}>{title}</span></p>
            </div>
            <div style={{ fontSize: '16px', color: '#333' }}>
                 <div style={{ fontWeight: 'bold', paddingBottom: '10px' }}>Examples</div> 
                {data.examples && data.examples.map((example, index) => (
                    <p key={index} style={{ fontSize: '16px', marginLeft:'20px'}}>
                       {anonymizeCountry(example.text)}
                        {example.ref && <span style={{ fontStyle: 'italic',fontSize: '12px' }}><br/> Reference:  {anonymizeCountry(example.ref)}, Source: {anonymizeCountry(example.source)}</span>}
                   </p>
                ))}
            </div>

        </div>
    )
}
function ContentText(props) {
    const { data, viz_type } = props;

    const text = createText(data, viz_type)

    return (
        <div className="content-text">
            {text}
        </div>
    );
}
ContentText.propTypes = {
    data: PropTypes.string.isRequired,
    viz_type: PropTypes.string.isRequired, // Added viz_type prop type
};
export default ContentText;