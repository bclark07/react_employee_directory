import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard.js";
// import API from "../utils/API";
import axios from "axios";
import SearchBar from "./SearchBar.js";
class EmployeeTable extends Component {
  state = {
    empList: [],
    displayList: [],
    sortKey: "",
    search: "",
    sortNameIcon: "fa fa-sort",
    sortDobIcon: "fa fa-sort",
  };
  getEmployees() {
    axios.get("https://randomuser.me/api/?results=20&nat=us").then((res) => {
      res.data.results.forEach((emp) => {
        emp.fullName = emp.name.first + " " + emp.name.last;
        emp.birthdate = emp.dob.date.substr(0, 10);
      });
      this.setState({
        empList: res.data.results,
        displayList: res.data.results,
      });
    });
  }
  async componentDidMount() {
    await this.getEmployees();
  }
  render() {
    return (
      <div>
        {empList
          .filter((emp) => emp.name === "Tom")
          .map((newList) => (
            <div>{newList.name}</div>
          ))}
      </div>
    );
  }
}
export default EmployeeTable;
