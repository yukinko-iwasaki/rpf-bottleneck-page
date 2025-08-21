
import React from "react";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import PropTypes from "prop-types";

function ArrowNav({ selectedItem, setSelectedItem }) {
  // navigationOrder except for group, which can be group1, group2, ... or groupA, groupB, ...
  const baseOrder = ["outcome", "results", "policy"];
  const navigationMap = {"outcome": "Development Outcome", "results": "Public Sector Results", "policy": "Delivery Capability and Feasible Policy", "group": "Evidence"};
  const groupMatch = selectedItem.match(/^group(\d+|[A-D])$/);
  let navigationOrder = [...baseOrder];
  if (groupMatch) {
    navigationOrder.push(selectedItem); // add the current groupN or groupX to the order
  } else {
    // If not a groupN or groupX, add a generic 'group' at the end for navigation
    navigationOrder.push("group");
  }

  const selectedIndex = navigationOrder.indexOf(selectedItem);
  const previousItem = selectedIndex > 0 ? navigationOrder[selectedIndex - 1] : null;
  const nextItem = selectedIndex >= 0 && selectedIndex < navigationOrder.length - 1 ? navigationOrder[selectedIndex + 1] : null;

  return (
    <div
      style={{ width: "100%", height: "50px", position: "relative" }}
    >
      {previousItem && (
        <div
          style={{ padding: "10px", color: "blue", textDecoration: "underline", cursor: "pointer", position: 'absolute', left: "10px" }}
          onClick={() => setSelectedItem(previousItem)}
        >
          <BiSolidLeftArrow size={15} /> {navigationMap[previousItem]}
        </div>
      )}
      {nextItem && (
        <div
          style={{ padding: "10px", color: "blue", textDecoration: "underline", cursor: "pointer", position: 'absolute', right: "10px" }}
          onClick={() => setSelectedItem(nextItem)}
        >
          {navigationMap[nextItem]} <BiSolidRightArrow size={15} />
        </div>
      )}
    </div>
  );
}

ArrowNav.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default ArrowNav;