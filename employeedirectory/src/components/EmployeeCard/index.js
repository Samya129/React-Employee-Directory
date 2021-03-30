import React from "react";
import "./style.css";

function EmployeeCard({ employeeInfo, searchInput }) {
  //Ascending and descending order pseudo code
  //console.log(employeeInfo[0].name.first);
  //let arrayOfNames = [{employeeInfo[0].name.first + " ," + employee?.name?.last}];
  //console.log(arrayOfNames)
  // arrayOfNames.sort(function(a, b){
  //   return a - b
  // });
  // console.log(arrayOfNames)
  console.log(searchInput)

  return (
    <table className="table table-hover">
      <thead>
        <tr className="tableHeadings">
          {/* <th scope="col"></th> */}
          <th ></th>
          <th scope="col">Name</th>
          <th></th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">City, State</th>
        </tr>
      </thead>
      <tbody className="eachCard">
        {employeeInfo.filter((singleUser) => {
          return singleUser.name.first.startsWith(searchInput);
          //if (singleUser.name.first === searchinput){ return ""}
        }).map((employee) => {
          return (
            <tr>
              <td></td>
              <td className="img-container">
                <img
                  alt={employee?.name?.first + " ," + employee?.name?.last}
                  src={employee?.picture?.medium}
                />
              </td>
              <td>
                {employee?.name?.first} {employee?.name?.last}
              </td>
              <td>
                <a href={employee?.email}> {employee?.email}</a>
              </td>
              <td>{employee?.phone}</td>
              <td>
                {employee?.location?.city}, {employee?.location?.state}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default EmployeeCard;


