import { useEffect, useState } from "react";
import { resorts } from "../assets/resortsData";

const resortList = [];
Object.keys(resorts).forEach((resort) => {
  console.log(resorts[resort].name);
});

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);

  return (
    <>
      <div className="form-container">
        <form className="form">
          <input
            className="search"
            id="search"
            type="text"
            placeholder="  Search for your mountain"
            onChange={handleChange}
            value={searchInput}
          />
          {/* <button id="submit" type="submit" className="submit">
            Search
          </button>
          <button id="clear" className="clear-results">
            X
          </button> */}
        </form>
      </div>
      <div className="results-container">
        <ul className="results-list" id="list">
          {}
        </ul>
      </div>
    </>
  );
};

export default Search;
