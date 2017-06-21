import React from 'react';

const Question4 = () =>
  <div>
    <div className="container instructions">
      <h1> What age category do you fall under? </h1>
    </div>
    <div className="question-button-group">
      <button className="question-button"> Under 18 </button>
      <button className="question-button"> 18 to 54 </button>
      <button className="question-button"> 55+ </button>
    </div>
    <div className="next-button-group">
      <button className="next-button"> Back </button>
    </div>
  </div>

export default Question4;
