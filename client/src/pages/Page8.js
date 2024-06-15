import React, { useState } from 'react';

const compensationLevels = [
  'I accept',
  'I do not accept',
  
];

function Page8() {
  const [selectedCompensation, setSelectedCompensation] = useState('');

  const handleOptionClick = (level) => {
    setSelectedCompensation(level);
  };


  return (
    <div className="page4">
        <p className="disclaimer">I hereby acknowledge that this application form was completed by me (the individual seeking to enroll in Metana) and I did not receive help from any external sources. The responses submitted are entirely my own and based on my own reasoning. Also, I opt in to receive communication messages from Metana about my application.</p>
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
    </div>
  )
}

export default Page8