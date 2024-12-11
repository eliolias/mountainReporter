import { useEffect, useState } from "react";
import { resorts } from "../assets/resortsData";

// const resortList: string[] = [];
// Object.keys(resorts).forEach((resort) => {
//   resortList.push(resort);
// });

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResorts, setFilteredResorts] = useState(Object.keys(resorts));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  // if (searchInput.length > 0) {
  //   Object.keys(resorts).filter((resort) => {
  //     //console.log(resort.match(searchInput));
  //     return resort.match(searchInput);
  //   });
  // }

  useEffect(() => {
    if (searchInput.length > 0) {
      const filtered = Object.keys(resorts).filter((resort) =>
        resort.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredResorts(filtered);
    } else {
      setFilteredResorts(Object.keys(resorts));
    }
  }, [searchInput]);

  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);

  return (
    <>
      <div className="form-container">
        <form className="form" action="#" autoComplete="off">
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
          {filteredResorts.map((resort: string) => {
            return <h3 key={resort}>{resort}</h3>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Search;
