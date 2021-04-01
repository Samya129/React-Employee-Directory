import React from "react";
import Header from "./components/Header/Header.js";
import Api from "../src/utils/API"
import Title from "./components/Title";

function App() {
  return (
    <div>
    <Header/>
    <Title/>
      <Api/>
    </div>
  );
}

export default App; //export the app component(function)
