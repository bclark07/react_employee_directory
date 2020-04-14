import React from "react";
// want to arrange this as a table, not a card with pic at top
function EmployeeCard(props) {
  return (
    <tr>
      {props.results.map((result) => (
        <>
          <td>Picture </td>
          <td>{result.name.first}</td>
          <td>{result.location.city}</td>
          <td>{result.email}</td>
          <td>Phone</td>
        </>
      ))}
    </tr>
  );
}

export default EmployeeCard;
