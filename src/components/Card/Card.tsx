import Lifts from "../Lifts";
import Trails from "../Trails";
import Weather from "../Weather/Weather";
import { resorts } from "../../assets/resorts";
import "./Card.css";
import { resortOperationData } from "../../scripts/resortDataScript";

const data = await resortOperationData();
console.log(data);

//import { resortOperationData } from "../../scripts/resortDataScript";

//const data = await resortOperationData();

// console.log(data);
//import { resortOperationData } from "../../scripts/resortDataScript";

// const data = await resortOperationData();
// console.log(data);
// resortOperationData.then(result => {
//   data = result;
// });

function Card() {
  return (
    <>
      <header>
        <img src={resorts.wildcat.logo} alt="Wildcat Mountain logo"></img>
      </header>
      <Trails />
      <Lifts />
      <Weather />
    </>
  );
}

export default Card;
