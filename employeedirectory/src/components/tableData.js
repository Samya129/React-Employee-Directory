import React from "react";
import { MDBDataTable } from "mdbreact";

const DatatablePage = ({ employeeInfo }) => {
  const information = employeeInfo.map((employee) => {
    return {
      profileImage: (
        <img
          alt={employee.name.first + " ," + employee.name.last}
          src={employee.picture.medium}
        />
      ),
      firstName: employee.name.first,
      lastName: employee.name.last,
      email: employee.email,
      phone: employee.phone,
      location: employee.location.city + ", " + employee.location.state,
    };
  });
  const results = information.length > 0;
  const data = {
    columns: [
      {
        label: "Profile",
        field: "profileImage",
        sort: "asc",
        width: 150,
      },
      {
        label: "First Name",
        field: "firstName",
        sort: "asc",
        width: 150,
      },
      {
        label: "Last Name",
        field: "lastName",
        sort: "asc",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 270,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 200,
      },
      {
        label: "Location",
        field: "location",
        sort: "asc",
        width: 100,
      },
    ],
    rows: results && information,
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      order={["firstName", "asc"]}
      data={data}
    />
  );
};

export default DatatablePage;
