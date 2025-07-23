import React from "react";
import {useEffect, useRef } from "react";
import {ReactComponent as MySvg} from '../assets/final.svg';
import PropTypes from 'prop-types';


const CircleVisual = ({ onClick, selectedItem }) => {
    const svgRef = useRef(null);
    useEffect(() => {
        if (selectedItem == 'group0'){
            return
        }
        if (svgRef.current) {
            for (const node of svgRef.current.children) {
                if (node.tagName === 'g' && node.id !== selectedItem) {
                    node.style.opacity = 0.5;
                }else{
                    node.style.opacity = 1;
                }
            }
        }
    }, [selectedItem]);

  return (
    <div className="svg-container" style={{ position: 'relative', padding: '10px' , height:'50%'}}>
      <MySvg ref={svgRef} className="file-svg" onClick={onClick} />
    </div>
  );
};

CircleVisual.propTypes = {
    onClick: PropTypes.func,
    selectedItem: PropTypes.string,
};
export default CircleVisual;
