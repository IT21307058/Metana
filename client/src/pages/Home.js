import React from 'react'

function Home() {
  return (
    <div className="landing-page">
      <div className="left-section">
        <h1>Launch your Data Career in Weeks, not Years</h1>
        <p className="expectations">What to expect:</p>
        <ul className="expectations-list">
          <li>Short-answer questions & No cover letter</li>
          <li>Takes 4 mins on average</li>
        </ul>
        <button className="start-button">Start Your Journey</button>
        <p className="submit-info">
          <span role="img" aria-label="people">👥</span> 106 people have filled this out
        </p>
      </div>
      <div className="right-section">
        <div className="rating">
          <span>Rated on</span>
          <span className="course-report">Course Report</span>
          <span className="rating-score">4.8</span>
        </div>
        <div className="companies">
          <span>Our students used to work at</span>
          <div className="company-logos">
            <img src="google-logo.png" alt="Google" />
            <img src="ibm-logo.png" alt="IBM" />
            <img src="nike-logo.png" alt="Nike" />
            <img src="ebay-logo.png" alt="eBay" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home