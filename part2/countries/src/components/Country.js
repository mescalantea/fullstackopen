export default function Country({ country }) {
    return (
        <article>
            <header>{country.name.common}</header>
            <img src={country.flags.png} alt={country.name.common} className="flag" />
            <p>Capital: {country.capital.join()}</p>
            <p>Population: {country.population}</p>
            <footer>
                <p>Languages</p>
                <ul>
                    {Object.values(country.languages).map(lang => (<li>{lang}</li>))}
                </ul>
            </footer>
        </article>
    )

}