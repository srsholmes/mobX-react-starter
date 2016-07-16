import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import Timer from './stores/timer'
import Counter from './stores/counter'
const timer = new Timer();
const counter = new Counter();
render(
  <App timer={timer} counter={counter}/>,
  document.querySelector('[app]')
);
