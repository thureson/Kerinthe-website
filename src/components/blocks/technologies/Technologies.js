import React from 'react';
import './Technologies.css';

const Technologies = ({ children }) =>
  <div className="Technologies">
    <div className="content-container">
      <div className="row">
        <div style={{ flex: 1 }}>
          <h3 className="text-area">
            Tech
          </h3>
        </div>
        <div style={{ flex: 2, display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <h4 className="text-area">
              frontend
            </h4>
            <h4 className="text-area">
              javascript
            </h4>
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ flex: 1 }} className="text-area">
              functional
            </h4>
            <h4 className="text-area">
              aws
            </h4>
          </div>
        </div>
      </div>
    </div>
    { children }
  </div>

export default Technologies;
