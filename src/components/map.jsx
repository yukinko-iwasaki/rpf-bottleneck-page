import React from 'react';
import Plot from 'react-plotly.js';

const WorldChoroplethMap = () => {
  const data = [{
    type: 'choropleth',
    locationmode: 'country names', // or 'ISO-3' if you use ISO codes
    locations: ['USA', 'CAN', 'MEX', 'BRA', 'ARG', 'GBR', 'FRA', 'DEU', 'CHN', 'IND', 'AUS'], // Example countries
    z: [10, 8, 5, 7, 3, 9, 8, 6, 12, 11, 4], // Example data values
    text: ['United States', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'United Kingdom', 'France', 'Germany', 'China', 'India', 'Australia'], // Hover text
    autocolorscale: true, // Automatically pick colors based on data
    showscale: false,
  }];

  const layout = {
    title: 'Simple World Choropleth Map',
    geo: {
      scope: 'world', // Set the scope to world
      showland: true,
      landcolor: 'rgb(243, 243, 243)',
      countrycolor: 'rgb(204, 204, 204)',
      projection: {
        type: 'robinson' // Or 'mercator', 'orthographic', etc.
      }
    },
    // *** Key to controlling margins ***
    margin: {
      l: 0, // left margin
      r: 0, // right margin
      b: 0, // bottom margin
      t: 0, // top margin
      pad: 0 // padding between the plotting area and the axis lines (if any)
    },
    paper_bgcolor: 'rgba(0, 0, 0, 0)', // R, G, B, Alpha (0 = fully transparent)
    // Set the background of the plotting area to transparent
    plot_bgcolor: 'rgba(0, 0, 0, 0)',
    // You can set width and height here as well
    width: 300,
    height: 300,
  };

  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
};

export default WorldChoroplethMap;