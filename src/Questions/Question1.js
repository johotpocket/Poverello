import React from 'react';

const Question1 = () =>
  <div>
    <div className="container instructions">
      <h1> Please select your gender </h1>
    </div>
    <div className="question-button-group">
      <button className="question-button"> Male </button>
      <button className="question-button"> Female </button>
    </div>
    <div className="back-button-group">
      <button className="back-button"> Back </button>
    </div>
  </div>

export default Question1;
