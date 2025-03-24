// Header.js
import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';

function Header() {
  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <header className="header-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Logo" className="logo me-2" />
            <span className="name">MD FARHAN</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#background">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <button 
                  onClick={handleResumeClick} 
                  className="nav-link btn-resume"
                >
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;