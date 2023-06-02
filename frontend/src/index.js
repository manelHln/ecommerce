import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./font-awesome/css/font-awesome.min.css"
import './index.css';
import App from './App';
// import AdminPanel from './AdminPanel';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);