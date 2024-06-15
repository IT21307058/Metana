import React from 'react'

function Page2() {
  return (
    <div className='page1'>
      <h2 style={{ marginLeft: "35px", color: "gray", marginBottom: "10px" }}>This is how we'll contact you.</h2>
      <div className="container">
        <div className="form-group">
          <input
            type="text"
            id="firstName"
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            placeholder="name@example.com"
            style={{ marginBottom: "20px" }}
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

export default Page2