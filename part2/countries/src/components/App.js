import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Countries'
import SearchCountries from './SearchCountries'
import Country from './Country'

function App() {


  const base = 'https://restcountries.com/v3.1'
  // const base = 'http://localhost:3001'

  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleGoBack = () => {
    setCountry(null)
  }
  // fetch countries from API.
  useEffect(() => {
    axios
      .get(`${base}/all`)
      .then(response =>
        setCountries(
          response.data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
        )
      )
      .catch(e => console.error(e))
  }, [search])

  return (
    <>
      <SearchCountries search={search} handleSearch={handleSearch} />
      <Countries countries={countries} country={country} setCountry={setCountry} />
      <Country country={country} setCountry={setCountry} />
    </>
  );
}

export default App;
