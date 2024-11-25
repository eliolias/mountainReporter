import Lifts from "../Lifts";
import Trails from "../Trails";
import Weather from "../Weather/Weather";
// import { resorts } from "../../assets/resorts";
import "./Card.css";

function Card() {
  return (
    <>
      {/* <h1>{resorts.wildcat.name}</h1> */}
      <header>
        <img
          src="https://www.skiwildcat.com/Assets/images/sites/wildcatmountain/resort-logo-color.svg"
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
