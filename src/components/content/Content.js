import React from 'react';
import './Content.css';

const Content = ({ children = [] }) =>
  <div className="Content">
    <div style={
      { 
        height: '120vh',
        marginTop: '350px',
        maxWidth: '100%',
        overflow: 'hidden'
        }} id="three-container" />
    {children}
  </div>

export default Content;
