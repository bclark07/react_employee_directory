import React, { Component } from "react";
import Search from "./Search";
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
      <Search
        search={this.state.search}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}

export default EmployeeTable;
