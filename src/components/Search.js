import React from "react";

function Search(props) {
  return (
    <form>
      <div className="form-inline justify-content-center">
        <label htmlFor="search">Search a Name: </label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control mb-2 mx-sm-2"
          id="search"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-secondary mt-3"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
