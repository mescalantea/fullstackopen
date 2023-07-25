import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Countries'
import SearchCountries from './SearchCountries'
import Country from './Country'
import Weather from './Weather'

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (!country || !country.capital.length) {
      // skip api call if city is not defined.
      setWeather(null)
      return
    }

    axios
      .get(`${process.env.REACT_APP_WEATHER_API_URL}?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${country.capital[0]}&units=m`)
      .then(response => setWeather(response.data))
      .catch(e => console.error(e))
  }, [country])


  const handleSearch = (e) => {
    setCountry(null)
    setSearch(e.target.value)
  }
  const handleClickOnCountry = (country) => {
    setCountry(country)
  }

  const handleGoBack = () => {
    setCountry(null)
    if (countries.length === 1) {
      setSearch('')
    }
  }

  // fetch countries from API.
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_COUNTRIES_API_URL)
      .then(response => {
        const filteredCountries = response.data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
        setCountries(filteredCountries)
        if (filteredCountries.length === 1) {
          setCountry(filteredCountries[0])
        }
      }
      )
      .catch(e => console.error(e))
  }, [search])

  return (
    <>
      <SearchCountries search={search} handleSearch={handleSearch} />
      <Countries countries={countries} country={country} handleClickOnCountry={handleClickOnCountry} />
      <Country country={country} handleGoBack={handleGoBack} />
      <Weather weather={weather} />
    </>
  );
}

export default App;
