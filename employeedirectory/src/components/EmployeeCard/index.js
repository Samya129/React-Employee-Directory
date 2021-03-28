import React from "react";
import "./style.css";

function EmployeeCard(employeeInfo) {
  // const working = dataSet.length > 0
  // console.log({working})

  // const info = {
  //     console.log(working && dataSet)
  // }
  console.log(employeeInfo)
  
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>

          <td className="img-container">
            {/* <img
              alt={
                employeeInfo[0]?.name?.first + "," + employeeInfo[0]?.name?.last
              }
              src={employeeInfo[0]?.picture?.medium}
            /> */}
          </td>
          <td>{employeeInfo[0]?.name?.first}</td>
          <td>{employeeInfo[0]?.name?.last}</td>
          <td>{employeeInfo[0]?.email}</td>
          <td>{employeeInfo[0]?.phone}</td>
          <td>
            {employeeInfo[0]?.location?.city},{" "}
            {employeeInfo[0]?.location?.state}
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td className="img-container">
            <img
              alt={
                employeeInfo[0]?.name?.first + "," + employeeInfo[0]?.name?.last
              }
              src={employeeInfo[0]?.picture?.medium}
            />
          </td>
          <td>{employeeInfo[0]?.name?.first}</td>
          <td>{employeeInfo[0]?.name?.last}</td>
          <td>{employeeInfo[0]?.email}</td>
          <td>{employeeInfo[0]?.phone}</td>
          <td>
            {employeeInfo[0]?.location?.city}{","}
            {employeeInfo[0]?.location?.state}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default EmployeeCard;
