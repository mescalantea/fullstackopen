export default function Countries({ countries, country, setCountry }) {
    if (country || !countries.length) {
        // nothing
        return
    }
    if (countries.length === 1) {
        setCountry(countries[0])
        return
    }
    if (countries.length > 10) {
        return (<p>Too many matches, specify another filter</p>)
    }
    return (
        <div className="country-list">{
            countries.map((country) => {
                const { name, flag } = country
                return (
                    <div className="country-list__item" key={name.common}>
                        <p><span className="country-list__flag">{flag}</span>{name.common}</p>
                        <button onClick={() => {
                            setCountry(country)
                        }}>Show</button>
                    </div>
                )
            })
        }</div>
    )
}