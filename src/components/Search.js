import React, { useState } from "react";

function Search(props) {
  const [searchName, setsearchName] = useState("");

 const handleInputChange = (event) => {
    setsearchName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(searchName);
  };

  return (
    <form>
      <div className="form-inline justify-content-center">
        <label htmlFor="search">Search a Name: </label>
        <input
          onChange={handleInputChange}
          value={searchName}
          name="search"
          type="text"
          className="form-control mb-2 mx-sm-2"
          id="search"
        />
        <button onClick={handleFormSubmit} className="btn btn-secondary mb-2 ">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
