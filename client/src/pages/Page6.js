import React, { useState } from 'react'


const experienceLevels = [
  'No experience (I have never programmed before.)',
  'Beginner (I have played with some introductory coding lessons and tutorials.)',
  'Intermediate (I have completed some coding classes or tutorials.)',
  'Advanced (I can build applications.)',
  'Professional (I am an experienced software engineer.)'
];


function Page6() {
  const [selectedExperience, setSelectedExperience] = useState('');

  const handleRadioChange = (event) => {
    setSelectedExperience(event.target.value);
  };

  return (
    <div className="page4">
      <div className="options-container1">
        {experienceLevels.map((level, index) => (
          // <label key={index} className={`option ${selectedExperience === level ? 'selected' : ''}`}>  
            <li
              key={index}
              className={`option ${selectedExperience === level ? 'selected' : ''}`}
              onClick={() => handleRadioChange(level)}
            >
            <span className="option-text">[{String.fromCharCode(65 + index)}] {level}</span>
              {/* <span className="option-text">{String.fromCharCode(65 + index)} {level}</span> */}
            </li>
          // </label>
        ))}

      </div>
      <button type="submit" className="submit-button">OK</button>
    </div>
  )
}

export default Page6