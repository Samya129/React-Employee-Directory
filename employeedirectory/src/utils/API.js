import axios from "axios";
import React, { useEffect, useState } from "react"; // 2 properties into React library
import DatatablePage from "../components/tableData";

function Api() {
  const url = "https://randomuser.me/api/?results=400"
  const [employees, setEmployees] = useState([]); //run employees and then set the employees

  useEffect(() => { //life cycle method
    axios.get(url).then((results) => {
      setEmployees(results.data.results);
    });
  }, []);
  return (
    <div className="container">
      {/* {console.log(employees)} */}
      <DatatablePage employeeInfo={employees}/>
    </div>
  );
}
export default Api;
