import React from 'react';//need in every document
import ReactDOM from 'react-dom'; //Need react-dom here in this file ONLY
import './index.css';
import App from './App'; //go get app jsx syntax component from app.js file
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App />, document.getElementById("root")); //app jsx tag syntax component after render