import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'
import Filter from './components/Filter'


function App() {

  const [countries, setCountries] = useState([])
  const [filterName, setFilterName] = useState('')
  
  useEffect(() => {
      axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {        
        setCountries(response.data)
      })
      .catch(error => {
        console.error('Error fetching countries:', error)
      })
    }, [])

    const countriesToShow = filterName === ''
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(filterName.toLowerCase()))


  return (    
    <div>
      <Filter filter={filterName} handleFilterChange={(event) => setFilterName(event.target.value)} />
      <CountryList countries={countriesToShow}></CountryList>
    </div>
  )
}

export default App
