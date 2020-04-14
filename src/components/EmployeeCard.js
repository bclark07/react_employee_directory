import React from "react";
// want to arrange this as a table, not a card with pic at top
function EmployeeCard() {
  return (
    <div className="card">
      <div className="card-body">
        <h2>Employee First Name Here</h2>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>Picture</li>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
              <strong>Location:</strong> {props.location}
            </li>
            <li>Name.first</li>
            <li>Name.last</li>
            <li>Location.city</li>
            <li>Location.state</li>
            <li>Email</li>
            <li>Phone</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
