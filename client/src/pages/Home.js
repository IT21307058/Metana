import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const naviagte = useNavigate();
    return (
        <div className="landing-page">
            <div className="left-section">
                <h1>Launch your Data Career in Weeks, not Years</h1>
                <p className="expectations">What to expect:</p>
                <ul className="expectations-list">
                    <li>Short-answer questions & No cover letter</li>
                    <li>Takes 4 mins on average</li>
                </ul>
                <div style={{display:"flex", gap:"20px"}}>
                    <button className="start-button" onClick={() => naviagte('/buildform-test')}>Start Your Journey</button>
                    <p style={{color:"black"}}>press Enter ↵</p>
                </div>
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
                        <img src="" alt="Google" />
                        <img src="" alt="IBM" />
                        <img src="" alt="Nike" />
                        <img src="" alt="eBay" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home