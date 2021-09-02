import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Axios from 'axios'

let url = 'http://localhost:8000'

Axios.defaults.baseURL = url;
Axios.defaults.headers.post['contentType'] = 'application/json';
Axios.defaults.headers.common['Authorization'] = localStorage.getItem('JWT_PAYLOAD');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
