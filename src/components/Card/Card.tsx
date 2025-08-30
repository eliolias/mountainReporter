import Lifts from "../Lifts";
import Trails from "../Trails";
import Terrain from "../Terrain";
import Search from "../Search";
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
  return (
    <>
      <header>
        <img src={resorts.wildcat.logo} alt="Mountain Logo"></img>
      </header>
      <Search />
      <Lifts data={liftData} />
      <Trails data={trailData} />
      <Terrain data={terrainData} />
    </>
  );
}

export default Card;
