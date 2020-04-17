import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [searchName, setsearchName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://randomuser.me/api/?results=200&nat=us"
      );
      setEmployeeData(res.data.results);
    };
    fetchData();
  }, []);
  console.log(employeeData);

  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid bg-info">
        <div className="container">
          <h1 className="display-4 text-center">Employee Directory</h1>
          <p className="lead  text-center">
            Click on cards to filter by heading or use the search box to narrow
            your results.
          </p>
        </div>
      </div>
      <Search setsearchName={setsearchName} searchName={searchName} />
      {employeeData && (
        <table className="table mb-2 mt-sm-2">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {searchName &&
              employeeData
                .filter((employee) => {
                  const regex = new RegExp(`${searchName}`, "gi"); //match wether upper or lower case
                  return employee.name.first.match(regex);
                })
                // .filter((employee) => employee.name.first === searchName)
                .map((filteredList) => (
                  <EmployeeCard
                    key={filteredList.id.value}
                    employee={filteredList}
                  />
                ))}
            {!searchName &&
              employeeData
                .slice(0, 15)
                .map((employee) => (
                  <EmployeeCard key={employee.id.value} employee={employee} />
                ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
