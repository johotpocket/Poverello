import React, { Component } from 'react';
import Header from './Header';
import Question1 from './Questions/Question1';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
        <div>
          <Question1 />
        </div>
      </div>
    );
  }
}

export default App;
