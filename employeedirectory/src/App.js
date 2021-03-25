import React from "react"; //name of the module
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from './components/EmployeeCard'
import friends from './employees.json'



function App() {
  //this is called from index.js
  return (
    <div>
      <Header />;
      <Wrapper>
      {/* getting Friends List is a part of props.children */}
      <Title>Friends List</Title> 
      {
        friends.map(({id, name, image, occupation, location})=> {
          return <FriendCard key={id} name={name} image={image} occupation={occupation} location={location}/>
        })
      }
    </Wrapper>
    </div>
    
  );
}

export default App; //export the app component(function)
