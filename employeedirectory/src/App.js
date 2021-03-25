import React, {useEffect, useState} from "react"; // 2 properties into React library
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from './components/EmployeeCard'
// import friends from './employees.json'
import axios from 'axios';



function App() {
  const [employees, setEmployees] = useState([]) //run employees and then set the employees

  useEffect( () => {
    axios.get("https://randomuser.me/api/?results=50").then((results)=>{
      setEmployees(results.data.results)
    })
  }, []) //holding new information into this array

  //this is called from index.js
  return (
    <div>
      {console.log(employees)}
      <Header />;
      <Wrapper>
      <Title>Employees List</Title> 
        <EmployeeCard employeeInfo= {employees} />
      {/* getting Friends List is a part of props.children */}
      {/* {
        friends.map(({id, name, image, occupation, location})=> {
          return <EmployeeCard key={id} name={name} image={image} occupation={occupation} location={location}/>
        })
      } */}
    </Wrapper>
    </div>
    
  );
}

export default App; //export the app component(function)
