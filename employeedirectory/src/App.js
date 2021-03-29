import React, { useState } from "react";
// import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Api from "./utils/Api"
import SearchForm from "./components/SearchForm";
import Title from "./components/Title";

function App() {
  //this is called from index.js
  const [input, setInput] = useState("");

  const handleInputChange = event => {
    setInput(event.target.value)
  
  };
  return (
    <div>
      <header className="header">
      {/* add the className from the css style sheet */}
      <Title>Employee Directory</Title> 
      <SearchForm  handleInputChange={handleInputChange}/>
    </header>
      <Wrapper>
      <Api employeeInput={input}/>
    </Wrapper>
    </div>
  );
}

export default App; //export the app component(function)
