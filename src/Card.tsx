import './Card.css';
import Lifts from './components/Lifts';
import Trails from './components/Trails';
import Weather from './components/Weather/Weather'
import { resorts } from './assets/resorts.ts'

function Card() {
  return (
    <>
        <h1>{resorts.wildcat.name}</h1>
        <div>resort logo</div>
        <Trails/>
        <Lifts/>
        <Weather/>
    </>
  )
}

export default Card