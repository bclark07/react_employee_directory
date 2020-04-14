import React, { Component } from "react";
import Search from "./Search";
// import EmployeeCard from "./EmployeeCard";
// import API from "../utils/API";
import axios from "axios";

class EmployeeTable extends Component {
  state = {
    search: "",
    //  (sortKey)? search(?)
    empResults: [],
    filterResults: [],
  };

  // componentDidMount() {
  //   this.searchEmployees("Tom");
  // }

  // searchEmployees = (query) => {
  //   API.search(query)
  //     .then((res) => this.setState({ results: res.data.data }))
  //     .catch((err) => console.log(err));
  // };

  searchEmployees() {
    axios.get("https://randomuser.me/api/?results=20&nat=us").then((res) => {
      res.data.results.forEach((emp) => {
        emp.fullName = emp.name.first + " " + emp.name.last;
        emp.location = emp.location.city + ", " + emp.location.state;
        // emp.email = emp.email;
        // emp.phone = emp.phone;
      });
      this.setState({
        empResults: res.data.results,
        filterResults: res.data.results,
      });
    });
  }
  async componentDidMount() {
    await this.getEmployees();
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.searchEmployees(this.state.search));
  };

  render(empResults) {
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
            <p>something here</p>
            {empResults
          .filter((emp) => emp.name === "Tom")
          .map((newList) => (
            <div>{newList.name}</div>
          ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default EmployeeTable;

