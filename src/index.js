import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeContainer from "./HomePage/HomeContainer"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HomeContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
