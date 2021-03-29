import axios from "axios";
import React, { useEffect, useState } from "react"; // 2 properties into React library
import EmployeeCard from "../components/EmployeeCard";

function Api({employeeInput}) {
  const url = "https://randomuser.me/api/?results=50"
  const [employees, setEmployees] = useState([]); //run employees and then set the employees

  useEffect(() => { //life cycle method
    axios.get(url).then((results) => {
      setEmployees(results.data.results);
    });
  }, []);
  return (
    <div className="container">
      {/* {console.log(employees)} */}
      <EmployeeCard employeeInfo={employees} searchInput={employeeInput} />
    </div>
  );
}
export default Api;
