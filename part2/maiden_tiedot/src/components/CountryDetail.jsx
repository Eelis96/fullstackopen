import Weather from "./Weather"

const CountryDetail = ({country}) => {
    console.log(country.name.common)
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            languages:
            <ul>
                {Object.values(country.languages).map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <h3>Currency: {Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ')}</h3>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            <Weather capital={country.capital[0]} />
        </div>
    )
}
export default CountryDetail