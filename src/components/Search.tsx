import { useEffect, useState } from "react";
import { resorts } from "../assets/resortsData";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResorts, setFilteredResorts] = useState(Object.keys(resorts));
  const [clickedIn, setClickedIn] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  // const showElements = useCallback(() => {
  //   clickedIn = true;
  //   console.log("INSIDE showElements function: " + clickedIn);
  //   return clickedIn;
  // });

  // console.log("OUTSIDE & AFTER showElements function: " + clickedIn);

  //NEED TO FIX TO USE name PROPERTY INSTEAD OF key
  useEffect(() => {
    if (searchInput.length > 0) {
      const filtered = Object.keys(resorts).filter((resort) =>
        resort.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredResorts(filtered);
      console.log(filteredResorts);
      setClickedIn(true);
    } else {
      setFilteredResorts(Object.keys(resorts));
      setClickedIn(true);
    }
  }, [searchInput]);

  // useEffect(() => {
  //   showElements();
  //   console.log("INSIDE USE EFFECT: " + clickedIn);
  // }, [clickedIn, showElements]);

  return (
    <>
      <div className="form-container">
        <form className="form" action="#" autoComplete="off">
          <input
            className="search"
            id="search"
            type="text"
            placeholder="  Search for your mountain"
            // onClick={showElements}
            onChange={handleChange}
            value={searchInput}
          />
        </form>
      </div>
      <div className="results-container">
        <ul className="results-list" id="list">
          {clickedIn
            ? filteredResorts.map((resort: string) => {
                return <h3 key={resort}>{resort}</h3>;
              })
            : null}
        </ul>
      </div>
    </>
  );
};

export default Search;
