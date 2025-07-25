import React from "react";
import PropTypes from 'prop-types';

const createSampleText = (length = 50) =>{
    return Array.from({ length }, () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit.").join(" ");
}
const createText = (data, viz_type) => {
    const title = viz_type === 'Bottleneck Group' ? "Public Finance Bottleneck" : "Public Finance Role";
    return (
        <div style={{ padding: '10px', lineHeight: '1.2', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
            <div style={{ width:'100%'}}>
                <p><span style={{'fontWeight':'bold'}}>{title}: </span>{data.title}</p>
                <p>{data.description}</p>
                <p>{data.description2}</p>
            </div>
            <div style={{ marginTop: '10px', fontSize: '16px', color: '#333' }}>
                 <div style={{ fontWeight: 'bold', paddingBottom: '10px' }}>Examples</div> 
                {data.examples && data.examples.map((example, index) => (
                    <p key={index} style={{ fontSize: '16px', marginLeft:'20px'}}>
                       {example.text}
                        {example.ref && <span style={{ fontStyle: 'italic',fontSize: '12px' }}><br/> Reference:  {example.ref}, Source: {example.source}</span>}
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
        <div className="content-text" style={{ margin: '20px 0'}}>
            {text}
        </div>
    );
}
ContentText.propTypes = {
    data: PropTypes.string.isRequired,
    viz_type: PropTypes.string.isRequired, // Added viz_type prop type
};
export default ContentText;