export default function SearchCountries({ search, handleSearch }) {
    return (
        <div>
            <label htmlFor="search">Find countries</label>
            <input id="search" type="text" value={search} onChange={handleSearch} />
        </div>
    )
}