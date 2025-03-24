// Portfolio.js
import React from 'react';
import '../styles/Portfolio.css';
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython } from 'react-icons/fa';
import fitclublogo from '../assets/fitclub.png';
import frslogo from '../assets/FRS.png';
import EduFastlogo from '../assets/edufastlogo.png';
import keynestlogo from '../assets/keynest.png';
import touchnshinelogo from '../assets/tns.png';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="row">
          {/* Fit Club Project */}
          <div className="col-md-4">
            <div className="card">
              <img src={fitclublogo} alt="Fit Club" className="card-img-top" />
              <div className="card-body">
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Fitness</span>
                  <span className="tag">UI/UX</span>
                </div>
                <h5 className="card-title">The Fit Club</h5>
                <p className="card-text">A modern fitness platform with workout tracking, nutrition plans, and community features.</p>
                <div className="btn-group">
                  <a href="https://github.com/FARHAN-2507/FITCLUB" className="btn-portfolio" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href="https://farhan-2507.github.io/FITCLUB/" className="btn-portfolio" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Face Recognition System */}
          <div className="col-md-4">
            <div className="card">
              <img src={frslogo} alt="FRS" className="card-img-top" />
              <div className="card-body">
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">OpenCV</span>
                  <span className="tag">AI</span>
                </div>
                <h5 className="card-title">Face Recognition Attendance</h5>
                <p className="card-text">AI-powered attendance system using facial recognition technology.</p>
                <div className="btn-group">
                  <a href="https://github.com/FARHAN-2507/face-Attendance-System-web-app-/tree/main/my-app" className="btn-portfolio" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* EduFast Project */}
          <div className="col-md-4">
            <div className="card">
              <img src={EduFastlogo} alt="EduFast" className="card-img-top" />
              <div className="card-body">
                <div className="project-tags">
                  <span className="tag">MERN Stack</span>
                  <span className="tag">Education</span>
                  <span className="tag">Full Stack</span>
                </div>
                <h5 className="card-title">EduFast</h5>
                <p className="card-text">Comprehensive e-learning platform with course management and student tracking.</p>
                <div className="btn-group">
                  <a href="https://github.com/FARHAN-2507/EDUFAST-" className="btn-portfolio" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href="https://farhan-2507.github.io/EDUFAST-/" className="btn-portfolio" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* EduFast Project */}
          <div className="col-md-4">
            <div className="card">
              <img src={keynestlogo} alt="EduFast" className="card-img-top" />
              <div className="card-body">
                <div className="project-tags">
                  <span className="tag">Vite + TS</span>
                  <span className="tag">Property</span>
                  <span className="tag">Frontend + SupaBase</span>
                </div>
                <h5 className="card-title">KeyNest</h5>
                <p className="card-text">Comprehensive Property Listing Platform for Property Dealers</p>
                <div className="btn-group">
                  <a href="https://github.com/FARHAN-2507/keynest" className="btn-portfolio" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href="https://keynest-2507.netlify.app/" className="btn-portfolio" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* EduFast Project */}
          <div className="col-md-4">
            <div className="card">
              <img src={touchnshinelogo} alt="EduFast" className="card-img-top" />
              <div className="card-body">
                <div className="project-tags">
                  <span className="tag">MERN Stack</span>
                  <span className="tag">Professional</span>
                  <span className="tag">Full Stack</span>
                </div>
                <h5 className="card-title">Touch N Shine</h5>
                <p className="card-text">A Salon WebSite for a Salon Situated In Rohini Sec 6 For Management and Bookings ..</p>
                <div className="btn-group">
                  <a href="https://github.com/FARHAN-2507/MP2" className="btn-portfolio" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href="#" className="btn-portfolio" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Projects Section */}
        <div className="more-projects">
          <h3>Additional Projects</h3>
          <div className="project-list">
            <div className="project-item">
              <h4>Symptom Checker Chat-Bot</h4>
              <p>AI-powered medical assistant using natural language processing</p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">NLP</span>
                <span className="tag">Healthcare</span>
              </div>
            </div>

            <div className="project-item">
              <h4>Million Dollar Home Page</h4>
              <p>Digital advertising platform with pixel-based marketing</p>
              <div className="project-tags">
                <span className="tag">JavaScript</span>
                <span className="tag">E-commerce</span>
              </div>
            </div>

            <div className="project-item">
              <h4>E-Commerce Analytics Dashboard</h4>
              <p>Real-time business intelligence platform</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Data Visualization</span>
              </div>
            </div>

            <div className="project-item">
              <h4>Task Management System</h4>
              <p>Collaborative project management solution</p>
              <div className="project-tags">
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
              </div>
            </div>
          </div>
          
          <a href="https://github.com/FARHAN-2507" className="github-link" target="_blank" rel="noopener noreferrer">
            Explore More on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;