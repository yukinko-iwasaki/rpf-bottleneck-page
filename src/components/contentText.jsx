import React from "react";
import PropTypes from 'prop-types';

const createSampleText = (length = 50) =>{
    return Array.from({ length }, () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit.").join(" ");
}
function ContentText(props) {
    const { text } = props;

    const sampleText = createSampleText(100)
    return (
        <div className="content-text" style={{borderBottom: 'solid #4C9FD2'}}>
            <p>{sampleText}</p>
        </div>
    );
}
ContentText.propTypes = {
    text: PropTypes.string.isRequired,
};
export default ContentText;