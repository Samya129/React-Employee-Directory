import React from "react";
import "./Header.css" 
// By importing the Header.css file, it is added to the DOM whenever this component loads
// import "./style.css"; for within header folder

import Title from "../Title";

function Header() {
  return (
    <div>
    <header className="header">
      {/* add the className from the css style sheet */}
      <Title>Employee Directory</Title> 
    </header>
    </div>
  );
}

export default Header;
