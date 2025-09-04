import { resorts } from "../../assets/resortsData";

export const resortSearch = (searchInput) => {
    let filteredResorts = Object.keys(resorts);

    if (searchInput.length > 0) {
      const filtered = Object.keys(resorts).filter((resort) =>
        resorts[resort].name.toLowerCase().includes(searchInput.toLowerCase())
      );
      filteredResorts = filtered;
    } else {
      filteredResorts = Object.keys(resorts);
    }

  return (
    filteredResorts
  );
};
