 import axios from "axios";
 import React, {useEffect, useState} from "react"; // 2 properties into React library
import EmployeeCard from "../components/EmployeeCard";
// import AllEmployeesList from "../components/AllEmployeesList"; 
//import Header from "../components/Header"
import SearchBar from "../components/SearchBar"


function Api (){
const [employees, setEmployees] = useState([]) //run employees and then set the employees

  useEffect( () => {
    axios.get("https://randomuser.me/api/?results=50").then((results)=>{
      setEmployees(results.data.results) 
    })
  }, []) //holding new information into this array when something changes(variable state)
// if (employees.length > 0){
//   return <AllEmployeesList employees={employees}/>
// } else{
// return "loading"
// }
return (
  <div className="container">
    {console.log(employees)}
    {/* <Header /> */}
    <SearchBar />
    <EmployeeCard employeeInfo={employees} />
  </div>
);
    
   
  
  }
  export default Api