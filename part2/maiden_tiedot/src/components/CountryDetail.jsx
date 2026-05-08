const CountryDetail = ({country}) => {
    console.log(country[0].name.common)
        return (
            <div>
                <h2>{country[0].name.common}</h2>
                <p>Capital: {country[0].capital}</p>
                <p>Area: {country[0].area}</p>
                languages:
                <ul>
                    {Object.values(country[0].languages).map(language => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>
                <h3>Currency: {Object.values(country[0].currencies).map(c => `${c.name} (${c.symbol})`).join(', ')}</h3>
                <img src={country[0].flags.png} alt={`Flag of ${country[0].name.common}`} />
            </div>
        )
}

export default CountryDetail