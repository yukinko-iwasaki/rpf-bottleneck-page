import React from "react";
import { useEffect, useRef } from "react";
import { ReactComponent as MySvg } from '../assets/final.svg';
import PropTypes from 'prop-types';

const CircleVisual = ({ onClick, selectedItem }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (selectedItem === 'group0') return;

        if (svgRef.current) {
            for (const node of svgRef.current.children) {
                if (node.tagName === 'g') {
                    if (node.id === selectedItem) {
                        node.classList.add('highlighted');
                    } else {
                        node.classList.remove('highlighted');
                    }
                }
            }
        }
    }, [selectedItem]);

    return (
        <div style={{
            flex: 1,
            minHeight: 0, // Important for flex children
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s ease-in-out'
        }}>
            <MySvg
                ref={svgRef}
                className="file-svg"
                onClick={onClick}
                style={{
                    cursor: 'pointer',
                    width: '100%',
                    height: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                }}
            />
        </div>
    );
};

CircleVisual.propTypes = {
    onClick: PropTypes.func,
    selectedItem: PropTypes.string,
};

export default CircleVisual;
