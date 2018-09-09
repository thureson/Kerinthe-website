import React from 'react';
import './Image.css';

const Image = ({ children }) =>
  <div className="Image">
    <img
      className="image"
      src="https://images.unsplash.com/photo-1516780236580-ef416334d5b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8b3125157f2a284f28b086c250dfa89d&auto=format&fit=crop&w=1288&q=80"
      alt="Temporal_pink"
    />
    { children }
  </div>

export default Image;
