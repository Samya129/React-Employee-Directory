import React from 'react'
import "./style.css";

function EmployeeCard(props){
    // {name, image, occupation, location, phoneNumber, email}
    return (
    <div className="card">
        <div className="img-container">
        {/* <img
            // alt={name}
            // src={image}
        /> */}
        </div>
        <div className="content">
        <ul>
            <li>
            <strong>Name:</strong> {props.employeeInfo[0]?.name?.first} 
            {/* This is the object of name and then within this subcategory is the first name from console */}
            </li>
            <li>
            {/* <strong>Occupation:</strong> {occupation} */}
            </li>
            <li>
            {/* <strong>Location:</strong> {location} */}
            </li>
            <li>
            {/* <strong>Phone Number:</strong> {phoneNumber} */}
            </li>
            <li>
            {/* <strong>Email:</strong> {email} */}
            </li>
        </ul>
        </div>
    </div>
    )
}

export default EmployeeCard;