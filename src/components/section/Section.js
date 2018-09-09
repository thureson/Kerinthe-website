import React from 'react';
import './Section.css';

const Section = ({ children }) =>
  <div className="Section">
    { children }
    <hr className="separator" />
  </div>

export default Section;
