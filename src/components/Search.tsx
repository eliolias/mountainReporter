import { useEffect, useState } from "react";
import { resorts } from "../assets/resortsData";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResorts, setFilteredResorts] = useState(Object.keys(resorts));
  const [clickedIn, setClickedIn] = useState(false);
  const [currentResort, setCurrentResort] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const updateResort = (event) => {
    console.log(event)
    setCurrentResort(event.target.innerHTML);

    console.log('current resort updated to ' + currentResort);
  };

  // useEffect(() => {
  // })
  

  useEffect(() => {
    if (searchInput.length > 0) {
      const filtered = Object.keys(resorts).filter((resort) =>
        resorts[resort].name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredResorts(filtered);
      setClickedIn(true);
    } else {
      setFilteredResorts(Object.keys(resorts));
      setClickedIn(false);
    }

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
        </form>
      </div>
      <div className="results-container">
        <ul className="results-list" id="list">
          {clickedIn
            ? filteredResorts.map((resort: string) => {
                return (
                  <h3 key={resort} onClick={updateResort}>
                    {resorts[resort].name}
                  </h3>
                );
              })
            : null}
        </ul>
      </div>
      <div className="placeholder-div">Selected resort: {currentResort}</div>
    </>
  );
};

export default Search;
