import React from "react";
import "./App.css";
// import EmployeeCard from "./components/EmployeeCard";
// import EmployeeTable from "./components/EmployeeTable";

function App() {
  return (
    <div className="container">
      <div class="jumbotron jumbotron-fluid bg-info">
        <div class="container">
          <h1 class="display-4 text-center">Employee Directory</h1>
          <p class="lead  text-center">
            Click on cards to filter by heading or use the search box to narrow
            your results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

// <EmployeeTable >
// <Title>Friends List</Title>
// <EmployeeCard />
// <FriendCard
//   name={friends[1].name}
//   image={friends[1].image}
//   occupation={friends[1].occupation}
//   location={friends[1].location}
// />
// <EmployeeCard />
// <EmployeeCard />
// <EmployeeCard />
// <EmployeeCard />
// </EmployeeTable>
