export default function Weather({ weather }) {
    if (weather) {
        // debugger
        return (
            <article>
                <header>Weather in {weather.location.name} <img src={weather.current.weather_icons} height={64} alt={weather.location.name + ' weather icon'} /></header>
                <p>Temperature: {weather.current.temperature} °C</p>
                <p>Wind: {weather.current.wind_speed} km/h direction {weather.current.wind_dir}</p>
            </article>
        )
    }
}