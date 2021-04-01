import React from "react";
import "./style.css" 

import Title from "../Title";

function Header() {
  return (
    <div>
    <header className="header">
      <Title>Employee Directory</Title> 
      <br></br>
      <p className="description">
        To begin, start by typing the name of the employee you'd like to search for. <br></br> Also, by clicking on the table headers, you have access to ascending and descending the order of the table for each category. <br></br>Try it out!
      </p>
    </header>
    </div>
  );
}

export default Header;
