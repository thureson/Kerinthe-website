import React from 'react';
import './Introduction.css';

const Introduction = ({ children }) =>
  <div className="Introduction">
    <div className="content-container">
      <div className="row">
        <div className="text-container">
          <div />
          <div>
            <h1 className="text-area">
              Are is depth about of.
            </h1>
            <h4 className="text-area">
              Loahe adom dkae adnka anja nsknek kaem mea.
              Maek amken an ema etuia neaifa arbajbsa ahei
              afae uovsa sbnabc anbc.
            </h4>
          </div>
        </div>
      </div>
    </div>
    { children }
  </div>

export default Introduction;
