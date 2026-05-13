import CountryDetail from "./CountryDetail"
import ShowButton from "./ShowButton"

const CountryList = ({countries, onSelect}) => {

    if(countries.length >= 10) {
        return <p>Too many countries, be more specific.</p>
    }

    if(countries.length > 1) {
        return (
        <ul>            
            {countries.map(country => (
            <li key={country.name.common}>{country.name.common}
            <ShowButton onClick={() => onSelect(country)} />
            
            </li>
            ))}
        </ul>
        )
    }

    if(countries.length === 1) {
        return <CountryDetail country={countries[0]} />
    }
}

export default CountryList