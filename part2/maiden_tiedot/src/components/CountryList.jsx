import CountryDetail from "./CountryDetail"

const CountryList = ({countries}) => {

    if(countries.length >= 10) {
        return <p>Too many countries, be more specific.</p>
    }

    if(countries.length > 1) {
        return (
        <ul>            
            {countries.map(country => (
            <li key={country.name.common}>{country.name.common}</li>
            ))}
        </ul>
        )
    }

    if(countries.length === 1) {
        return <CountryDetail country={countries} />
    }
}

export default CountryList