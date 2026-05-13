import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'
import Filter from './components/Filter'
import CountryDetail from './components/CountryDetail'


function App() {

  const [countries, setCountries] = useState([])
  const [filterName, setFilterName] = useState('')
  const [selected, setSelected] = useState(null)

  
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

    if(selected) return (
    <div>
      <button onClick={() => setSelected(null)}>return</button>
      <CountryDetail country={selected} />
    </div>
)

  return (    
    <div>
      <Filter filter={filterName} handleFilterChange={(event) => setFilterName(event.target.value)} />
      <CountryList countries={countriesToShow} onSelect={setSelected} ></CountryList>
    </div>
  )
}

export default App
