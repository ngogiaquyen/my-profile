import React from 'react';
import './SocialProfile.css'; // Import CSS file for styling
import avatar from '../../assets/avatar.png'; // Import avatar image
import githubIcon from '../../assets/tiktok.png'; // Import GitHub icon
import linkedinIcon from '../../assets/facebook.png'; // Import LinkedIn icon
import twitterIcon from '../../assets/facebook.png'; // Import Twitter icon

function SocialProfile() {
    return (
        <div className="social-profile">
            <div className="background"></div>
            <img src={avatar} alt="Avatar" className="avatar" />
            <h1>Your Name</h1>
            <p>Frontend Developer | ReactJS Enthusiast</p>
            <div className="contact-info">
                <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
                <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
            </div>
            <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" className="social-icon" />
                </a>
            </div>
        </div>
    );
}

export default SocialProfile;
