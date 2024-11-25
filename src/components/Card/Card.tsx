import Lifts from "../Lifts";
import Trails from "../Trails";
import Weather from "../Weather/Weather";
import { resorts } from "../../assets/resorts";
import "./Card.css";

function Card() {
  return (
    <>
      <header>
        <img
          src={resorts.attitash.logo}
          alt="Wildcat Mountain logo"
        ></img>
      </header>
      <Trails />
      <Lifts />
      <Weather />
    </>
  );
}

export default Card;
