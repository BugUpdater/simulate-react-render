// import React from 'react';
// import ReactDOM from 'react-dom';
import React from "./utils/react";
import ReactDOM from './utils/react-dom';
import './index.css';

ReactDOM.render(
  <div className="main-div">
    <h1 value="123" style={{
      color: 'orange',
      backgroundColor: 'lightyellow',
    }}>Hello World.</h1>
  </div>,
  document.getElementById('root')
);
