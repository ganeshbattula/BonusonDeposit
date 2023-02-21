import React from 'react';
import ReactDOM from 'react-dom';
import BonusCalculator from './BonusCalculator';
import App from './App';
import './style.css';


const Root = () => (
  <div>
    <BonusCalculator />
    <App />
  </div>
);

ReactDOM.render(<Root />, document.getElementById('root'));
