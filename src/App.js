import React, { useState } from 'react';
import './App.css';

const BarGraph = ({ percentage }) => {
  const graphStyle = {
    height: `${percentage}%`,
    background: 'linear-gradient(to bottom, #c2e3ff, #008cff)',
  };

  return <div className="bar-graph" style={graphStyle}></div>;
};

const PieChart = ({ percentage }) => {
  const graphStyle = {
    background: `conic-gradient(#c2e3ff ${percentage}%, transparent ${percentage}%)`,
  };

  return <div className="pie-chart" style={graphStyle}></div>;
};

const GradientGraph = () => {
  const [inputValue, setInputValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [error, setError] = useState('');
  const [percentage, setPercentage] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleMaxValueChange = (event) => {
    setMaxValue(event.target.value);
  };

  const plotGraph = () => {
    if (parseInt(inputValue) > parseInt(maxValue)) {
      setError('Input value should be less than or equal to max value.');
      setPercentage(0);
    } else {
      setError('');
      const percent = (parseInt(inputValue) / parseInt(maxValue)) * 100;
      setPercentage(percent);
    }
  };

  return (
    <div className="container">
      <h2>Gradient Graphs</h2>
      <div className="input-container">
        <label htmlFor="input-value">Input Value:</label>
        <input
          type="number"
          id="input-value"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="max-value">Max Value:</label>
        <input
          type="number"
          id="max-value"
          value={maxValue}
          onChange={handleMaxValueChange}
        />
      </div>
      {error && <div className="error">{error}</div>}
      <button onClick={plotGraph}>Plot Graphs</button>
      {inputValue && maxValue && (
        <div className="graph-container">
          {/* <div className="column">
            <h3>Percentage</h3>
            <div>{percentage}%</div>
          </div> */}
          <div className="column">
          
          <BarGraph percentage={percentage} />
          <p>{percentage}%</p>
          <h3>Level 1 </h3>
            
            
          </div>
          <div className="column">
            
            <PieChart percentage={percentage} />
            <p>{percentage}%</p>
            <h3>Level 2 </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default GradientGraph;
