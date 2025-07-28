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
                    node.classList.remove('highlighted');
                }else{
                    node.classList.add('highlighted');
                }
            }
        }
    }, [selectedItem]);

  return (
    <div className="svg-container" style={{ position: 'relative', padding: '10px', maxHeight:'70%' , maxWidth: '100%', overflow: 'hidden' }}>
      <MySvg ref={svgRef} className="file-svg" onClick={onClick} style={{ cursor: 'pointer' }} />
    </div>
  );
};

CircleVisual.propTypes = {
    onClick: PropTypes.func,
    selectedItem: PropTypes.string,
};
export default CircleVisual;
