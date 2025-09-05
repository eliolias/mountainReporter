import { useEffect, useState } from "react";
import { resorts } from "../../assets/resortsData";
import { resortSearch } from "./resortSearch";

interface SearchProps {
  currentResort: string;
  setCurrentResort: (resort: string) => void;
}

const Search = ( {currentResort, setCurrentResort}: SearchProps) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResorts, setFilteredResorts] = useState(Object.keys(resorts));
  const [clickedIn, setClickedIn] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const updateResort = (resort: string) => {
    setCurrentResort(resort);
  };
  
  useEffect(() => {
    console.log('currentResort state updated to:', currentResort);
  }, [currentResort]);
  

  useEffect(() => {
    if (searchInput.length > 0) {
      setFilteredResorts(resortSearch(searchInput))
      setClickedIn(true);
    } else {
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
                  <h3 key={resort} onClick={() => updateResort(resorts[resort].name)}>
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
