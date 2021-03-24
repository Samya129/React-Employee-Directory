import React from "react"; //name of the module
import HelloReact from "./components/HelloReact"; //the folder area right here. Do not need to put .js
import './App.css'; //How to link css


function App() { //this is called from index.js
  return <HelloReact />; //name of that component without .js at the end. comes from helloreact.js file

}

export default App; //export the app component(function)
