import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';
function CustomFilter(props) {
    const { filterType, filterOptions, onFilterChange } = props;

    return (
        <Dropdown style={{'margin': "0.3rem"}}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {filterType}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {filterOptions.map((option, index) => (
                    <Dropdown.Item 
                        key={index} 
                        onClick={() => onFilterChange(option)}
                    >
                        {option}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

CustomFilter.propTypes = {
    filterType: PropTypes.string.isRequired,
    filterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    onFilterChange: PropTypes.func.isRequired
};

export default CustomFilter;