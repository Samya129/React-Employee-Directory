import React from "react";
import "../styles/Header.css"; //imports the style sheet option 1
// By importing the Header.css file, it is added to the DOM whenever this component loads
import SearchBar from "../components/SearchBar";

function Header() {
  return (
    <div>
    <header className="header">
      {/* add the className from the css style sheet */}
      <h1>Hi</h1>
      <SearchBar />;
    </header>
    </div>
  );
}

export default Header;
