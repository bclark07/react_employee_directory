import React from "react";
// want to arrange this as a table, not a card with pic at top
function EmployeeCard() {
  return (
    <tr>
      <td>Picture </td>
      <td>Name.first + Name.last</td>
      <td>Location.city, Location.state</td>
      <td>Email</td>
      <td>Phone</td>
    </tr>
  );
}

export default EmployeeCard;
