import React, { useState } from 'react';

const languages = [
  'Solidity', 'Rust', 'Node.js', 'Typescript', 'Javascript',
  'C', 'C++', 'C#', 'SQL', 'Python', 'Assembly Language',
  'Haskell', 'R', '.NET', 'Other'
];


function Page5() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);


  return (
    <div className="page4">
      {/* <div className="form"> */}
        <p className="subtitle">Select all the languages you know.</p>
        <div className="options-container">
          {languages.map((language, index) => (
            <label key={language} className={`option ${selectedLanguages.includes(language) ? 'selected' : ''}`} style={{ display: "flex", gap: "30px"}}>
              [{String.fromCharCode(65 + index)}] {language}
            </label>
          ))}
        </div>
        <button type="submit" className="submit-button">OK</button>
      {/* </div> */}
    </div>
  )
}

export default Page5