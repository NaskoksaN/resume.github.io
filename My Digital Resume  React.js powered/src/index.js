import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'; 
import './index.css'; 

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  document.body.classList.add('loaded');
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
