import React from "react";

function EmployeeCard({ employee }) {
  return (
    <tr>
      <td>
        <div className="img-container">
          <img alt={employee.name.first} src={employee.picture.medium} />
        </div>
      </td>
      <td>
        {employee.name.first} {employee.name.last}
      </td>
      <td>
        {employee.location.city}, {employee.location.state}
      </td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
    </tr>
  );
}

export default EmployeeCard;
