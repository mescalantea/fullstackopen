import Country from "./Country"

export default function Countries({ countries }) {
    if (countries.length > 10) {
        return (<p>Too many matches, specify another filter</p>)
    }
    if (!countries.length) {
        // nothing
        return (<></>)
    }
    if (countries.length === 1) {
        // single view.
        return (<Country country={countries[0]} />)
    }
    // list view.
    return (
        countries.map(({ name }) => (<p key={name.common}>{name.common}</p>))
    )
}