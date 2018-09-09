import React from 'react';
import './About.css';

const About = ({ children }) =>
  <div className="About">
    <div className="content-container">
      <div className="row">
        <div style={{ flex: 1 }}>
          <h3 className="text-area">
            About
          </h3>
        </div>
        <div style={{ flex: 2, display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <h4 className="text-area">
              2018
            </h4>
            <h4 className="text-area">
              Modern
            </h4>
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ flex: 1 }} className="text-area">
              2 Projects
            </h4>
            <h4 className="text-area">
              Filler
            </h4>
          </div>
        </div>
      </div>
    </div>
    { children }
  </div>

export default About;
