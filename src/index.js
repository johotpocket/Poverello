import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Question1 from './Questions/Question1.js';
import Question2 from './Questions/Question2.js';
import './index.css';
import {Route, Router, IndexRoute, BrowserHistory} from 'react-router'

ReactDOM.render(
  <Router history={BrowserHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Question1}/>
      <Route path='/question1' component={Question1}/>
      <Route path='/question2' component={Question2}/>
  </Route>
  </Router>,
  document.getElementById('root')
);
