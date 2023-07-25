export default function Country({ country, handleGoBack }) {
    if (!country) {
        return
    }
    return (
        <article>
            <header>{country.name.common}<button onClick={handleGoBack}>Go Back</button></header>
            <img src={country.flags.png} alt={country.name.common} className="flag" />
            <p>Capital: {country.capital.join()}</p>
            <p>Population: {country.population}</p>
            <footer>
                <p>Languages</p>
                <ul>
                    {Object.values(country.languages).map(lang => (<li key={lang}>{lang}</li>))}
                </ul>
            </footer>
        </article>
    )
}