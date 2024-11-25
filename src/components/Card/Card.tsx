import Lifts from "../Lifts";
import Trails from "../Trails";
import Weather from "../Weather/Weather";
import { resorts } from "../../assets/resorts";

function Card() {
  return (
    <>
      <h1>{resorts.wildcat.name}</h1>
      <div>resort logo</div>
      <Trails />
      <Lifts />
      <Weather />
    </>
  );
}

export default Card;
