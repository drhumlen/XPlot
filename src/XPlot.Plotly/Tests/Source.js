﻿var xValues = numeric.linspace(1, 3, 200);

var yValues = [];

for ( var i = 0 ; i < xValues.length ; i++ ) {
  var result = xValues[i] * Math.sin(Math.pow(xValues[i], 2)) + 1;
  yValues.push(result);
};

var trace1 = {
  x: xValues,
  y: yValues,
  type: 'scatter'
};

var data = [trace1];

var layout = {
  title: 'Creating Tangent Lines with Shapes',
  shapes: [{
    type: 'line',
    x0: 1,
    y0: 2.30756,
    x1: 1.75,
    y1: 2.30756,
    opacity: 0.7,
    line: {
      color: 'red',
      width: 2.5
    }
  }, {
    type: 'line',
    x0: 2.5,
    y0: 3.80796,
    x1: 3.05,
    y1: 3.80796,
    opacity: 0.7,
    line: {
      color: 'red',
      width: 2.5
    }
  }, {
    type: 'line',
    x0: 1.90,
    y0: -1.1827,
    x1: 2.50,
    y1: -1.1827,
    opacity: 0.7,
    line: {
      color: 'red',
      width: 2.5
    }
  }],
  height: 500,
  width: 500
};

Plotly.newPlot('myDiv', data, layout);
