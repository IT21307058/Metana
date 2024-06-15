import React from 'react'

function Page1({ formData, setFormData }) {
  return (
    <div className="page1">
      <div className="container">
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            placeholder="Jane"
            style={{marginBottom: "48px"}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
            placeholder="Smith"
            style={{marginBottom: "48px"}}
          />
        </div>
        <div className='divider'>
          <button type="submit" className="submit-button">OK</button>
          <p className="hint">press Enter ↵</p>
        </div>
      </div>
    </div>
  )
}

export default Page1