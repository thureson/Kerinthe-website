import React from 'react';
import './Contact.css';

const Contact = ({ children }) =>
  <div className="Contact">
    <div className="content-container">
      <div className="center">
        <div style={{ paddingBottom: '15px' }}>
          <span className="text-area light-text">
            Tom Thureson
          </span>
          <br />
          <span className="text-area light-text">
            +358456500444
          </span>
          <br />
          <span className="text-area light-text">
            tom.thureson@gmail.com
          </span>
        </div>
        <div>
          <span className="text-area light-text">
            Pohjoinen Rautatiekatu 29
          </span>
          <br />
          <span className="text-area light-text">
            00100, Helsinki
          </span>
        </div>
      </div>
    </div>
    { children }
  </div>

export default Contact;
