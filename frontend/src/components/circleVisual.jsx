import React from "react";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as DefaultWheel } from '../assets/default-visual.svg';
import { ReactComponent as BottleneckWheel } from '../assets/focus-bottleneck.svg';
import { ReactComponent as RoleWheel } from '../assets/focus-roles.svg';

import PropTypes from 'prop-types';
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const CircleVisual = ({ onClick, selectedItem }) => {
    const svgRef = useRef(null);
    const [wheelType, setWheelType] = useState('');

    const wheel_types = [
        { name: 'Roles of public finance', value: '1' },
        { name: 'Public Finance Bottlenecks', value: '2' },
    ];
    const handleButtonClick = (e) => {
         setWheelType(e.currentTarget.value)
         onClick(e);
    }
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
        if (selectedItem.endsWith('roles')) {
            // Do something specific for group-roles
            setWheelType('1');
        }else if (selectedItem.endsWith('bottlenecks')) {
            setWheelType('2');
        }
    }, [selectedItem]);
    const MySvg = wheelType === '1' ? RoleWheel : wheelType === '2' ? BottleneckWheel : DefaultWheel;

    return (
        <>
      <ButtonGroup style={{'marginLeft': '20px'}}>
        {wheel_types.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={wheelType === radio.value}
            onChange={(e) => handleButtonClick(e)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
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
        </>
    );
};

CircleVisual.propTypes = {
    onClick: PropTypes.func,
    selectedItem: PropTypes.string,
};

export default CircleVisual;
