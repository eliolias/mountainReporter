import { useState } from "react";
import Lifts from "../Lifts";
import Trails from "../Trails";
import Terrain from "../Terrain";
import Search from "../Search/Search";
import { resorts } from "../../assets/resortsData";
import "./Card.css";

// let resortData;
let liftData: string;
let trailData: string;
let terrainData: string;

// Fetching resort data from local JSON file before rendering
// const fetchResortData = async () => {
//   let resortData;
//   await fetch("src/assets/scrapedResortsData.json")
//     .then((response) => response.json())
//     .then((json) => (resortData = json));
//   if (resortData) {
//     liftData = resortData[0]["data"]["liftData"];
//     trailData = resortData[0]["data"]["trailData"];
//     terrainData = resortData[0]["data"]["terrainData"];
//   }
// };

let resortData;
await fetch("src/assets/scrapedResortsData.json")
  .then((response) => response.json())
  .then((json) => (resortData = json));
if (resortData) {
  liftData = resortData[0]["data"]["liftData"];
  trailData = resortData[0]["data"]["trailData"];
  terrainData = resortData[0]["data"]["terrainData"];
}

// fetchResortData();

// window.onload = () => {
//   fetchResortData();
// };

// await fetch("src/assets/scrapedResortsData.json")
//   .then((response) => response.json())
//   .then((json) => (resortData = json));

// Applying data to appropriate variables
// if (resortData) {
//   liftData = resortData[0]["data"]["liftData"];
//   trailData = resortData[0]["data"]["trailData"];
//   terrainData = resortData[0]["data"]["terrainData"];
// }

function Card() {
  const [currentResort, setCurrentResort] = useState("wildcat")
  const currentResortData = resorts[currentResort] || resorts.wildcat.name;

  return (
    <>
      <header>
        <img src={currentResortData.logo} alt="Mountain Logo"></img>
      </header>
      <Search currentResort={currentResort} setCurrentResort={setCurrentResort}/>
      <Lifts data={liftData} />
      <Trails data={trailData} />
      <Terrain data={terrainData} />
    </>
  );
}

export default Card;
