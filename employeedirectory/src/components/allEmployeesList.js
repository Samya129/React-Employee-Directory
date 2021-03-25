import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function allEmployeesList(props) {
  // Using the filter method, we can create a new array containing only groceries which haven't been purchased
  const employees = props.employeeInfo.filter(grocery => !grocery.purchased);

  return (
    <ul className="list-group">
      {employees.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default allEmployeesList;