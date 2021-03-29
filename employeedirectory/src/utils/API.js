import axios from "axios";
import React, { useEffect, useState } from "react"; // 2 properties into React library
import EmployeeCard from "../components/EmployeeCard";

function Api() {
  const [employees, setEmployees] = useState([]); //run employees and then set the employees

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50").then((results) => {
      setEmployees(results.data.results);
    });
  }, []);
  return (
    <div className="container">
      {console.log(employees)}
      <EmployeeCard employeeInfo={employees} />
    </div>
  );
}
export default Api;
