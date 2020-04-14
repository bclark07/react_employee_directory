import React from "react";

function EmployeeCard() {
  return (
    <div className="card">
      <div className="card-body">
        <h2>Employee First Name Here</h2>
        <li>Picture</li>
        <ul>
          <li>Name.first</li>
          <li>Name.last</li>
          <li>Location.city</li>
          <li>Location.state</li>
          <li>Email</li>
          <li>Phone</li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
