import Lifts from "../Lifts";
import Trails from "../Trails";
import Terrain from "../Terrain";
import { resorts } from "../../assets/resortsData";
import "./Card.css";

let resortData;
let liftData: string;
let trailData: string;
let terrainData: string;

// Fetching resort data from local JSON file before rendering
await fetch("src/assets/scrapedResortsData.json")
  .then((response) => response.json())
  .then((json) => (resortData = json));

// Applying data to appropriate variables
if (resortData) {
  liftData = resortData[0]["data"]["liftData"];
  trailData = resortData[0]["data"]["trailData"];
  terrainData = resortData[0]["data"]["terrainData"];
}

function Card() {
  return (
    <>
      <header>
        <img src={resorts.wildcat.logo} alt="Wildcat Mountain logo"></img>
      </header>
      <Lifts data={liftData} />
      <Trails data={trailData} />
      <Terrain data={terrainData} />
    </>
  );
}

export default Card;
