import React from "react";
import "./style.css";

function EmployeeCard({ employeeInfo }) {
  console.log(employeeInfo);

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {employeeInfo.map((employee, index) => {
          return (
            <tr>
              <td scope="row">{index + 1}</td>
              <td className="img-container">
                <img
                  alt={employee?.name?.first + "," + employee?.name?.last}
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
