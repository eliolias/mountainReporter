import Forecast from "./Forecast"
import Snowfall from "./Snowfall"
import Temps from "./Temps"
import WindSpeed from "./WindSpeed"

const Weather = () => {
    return (
        <>
        <h1>WEATHER</h1>
        <WindSpeed/>
        <Temps/>
        <Snowfall/>
        <Forecast/>
        </>
    )
}

export default Weather