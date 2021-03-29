import React from 'react'
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Api from "./utils/Api"

function App() {
  //this is called from index.js
  return (
    <div>
      <Header /> 
      <Wrapper>
      <Api />
    </Wrapper>
    </div>
  );
}

export default App; //export the app component(function)
