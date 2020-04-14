import React, { Component } from "react";
import Search from "./Search";
import EmployeeCard from "./EmployeeCard";
// import ResultList from "./ResultList";
// import API from "../utils/API";

class EmployeeTable extends Component {
  state = {
    search: "",
    results: [],
  };

  // searchEmployees = (query) => {
  //   API.search(query)
  //     .then((res) => this.setState({ results: res.data.data }))
  //     .catch((err) => console.log(err));
  // };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <table class="table mb-2 mt-sm-2">
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
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
          </tbody>
        </table>
      </>
    );
  }
}

export default EmployeeTable;
