import React from 'react'
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Api from "./utils/Api"
 //import EmployeeCard from "./components/EmployeeCard/index"
//import AllEmployeesList from "./components/AllEmployeesList"

// import friends from './employees.json'



function App() {
  //this is called from index.js
  return (
    <div>
      <Header />
      <Title>Employee Directory</Title> 
      <Wrapper>
      <Api />
          {/* <EmployeeCard
            fullName={employeeInfo.name.first }
            email= {employeeInfo.email}
            phoneNumber= {employeeInfo.phone}
            location={employeeInfo.location.city + employeeInfo.location.state}
            
          /> */}
          {/* <AllEmployeesList/> */}
          {/* <EmployeeCard /> */}
        
    </Wrapper>
    
    </div>
    
  );
}

export default App; //export the app component(function)
