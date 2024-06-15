import React, { useState } from 'react';

const compensationLevels = [
  '<$30,000',
  '$30,000 - $50,000',
  '$50,000 - $80,000',
  '$80,000 - $120,000',
  '$120,000 - $250,000',
  '$250,000 or more'
];


function Page7() {
  const [selectedCompensation, setSelectedCompensation] = useState('');

  const handleOptionClick = (level) => {
    setSelectedCompensation(level);
  };

  return (
    <div className="page7">
      <div className="left-section">
        <p className="disclaimer">Disclaimer: The information provided regarding salary will be kept confidential and <b>will not</b> be used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.</p>
        <ul className="options-container1">
          {compensationLevels.map((level, index) => (
            <li
              key={index}
              className={`option ${selectedCompensation === level ? 'selected' : ''}`}
              onClick={() => handleOptionClick(level)}
            >
              <span className="option-text" style={{color: "b593ff"}}>{String.fromCharCode(65 + index)} {level}</span>
            </li>
          ))}
        </ul>
        <button type="submit" className="submit-button">OK</button>
      </div>
      <div className="right-section">
        <h2>+ $26,500</h2>
        <p className="increase-text">Average <span className="highlight">salary increase</span></p>
        <p className="description">Metana students who provided pre- and post-course salaries.</p>
      </div>
    </div>
  )
}

export default Page7