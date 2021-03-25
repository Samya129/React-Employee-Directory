import React from 'react'
import "./style.css";

function EmployeeCard({employeeInfo}){
    return (
    <div className="card">
        <div className="content">
        <div className="img-container">
        <img
            alt= {employeeInfo[0]?.name?.first, employeeInfo[0]?.name?.last}
            src={employeeInfo[0]?.picture?.medium}
        />
        </div>
        <ul>
        {/* <li>
            <strong>Profile Image:</strong> {employeeInfo[0]?.picture?.medium}
            </li> */}
            <li>
            <strong>Name:</strong> {employeeInfo[0]?.name?.first} {employeeInfo[0]?.name?.last}
            {/* This is the object of name and then within this subcategory is the first name from console */}
            </li>
            {/* <li>
            <strong>Last Name:</strong> {props.employeeInfo[0]?.name?.last}
            </li> */}
            <li>
            <strong>Email:</strong> {employeeInfo[0]?.email}
            </li>
            <li>
            <strong>Phone Number:</strong> {employeeInfo[0]?.phone}
            </li>
            <li>
            <strong>Location:</strong> {employeeInfo[0]?.location?.city}, {employeeInfo[0]?.location?.state}
            </li>

        </ul>
        </div>
    </div>
    )
}

export default EmployeeCard;