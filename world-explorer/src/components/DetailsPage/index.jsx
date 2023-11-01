export default function Details({ countryData }) {
    // Initialize variables with default values
    let capitalElement = <p>No capital data available</p>;
    let continentElement = <p>No continent data available</p>;
    let currencyElement = <p>No currency data available</p>;
    let populationElement = <p>No population data available</p>;
    let languageElement = <p>No language data available</p>;
    let flagElement = null;

    // Conditionally render each item if they exist
    if (countryData.capital) {
        capitalElement = <p>Capital: {countryData.capital}</p>;
    }

    if (countryData.continents) {
        continentElement = <p>Continents: {countryData.continents.join(', ')}</p>;
    }

    if (countryData.currencies) {
        // Get an array of currency codes from the object, select the first currenct code in the array
        const currencyCode = Object.keys(countryData.currencies)[0];
        // Access the name property of the currency
        const currencyName = countryData.currencies[currencyCode].name;
        // Access the symbol property of the currency
        const currencySymbol = countryData.currencies[currencyCode].symbol;
        // Define a variable to display the data
        currencyElement = (
            <p>Currency: {currencyName} ({currencySymbol})</p>
        );
    }

    if (countryData.population) {
        populationElement = <p>Population: {countryData.population}</p>;
    }

    if (countryData.languages) {
        // Convert the object into an array of [code, name] pairs 
        // Then iterate through the array of languages
        const languageElements = Object.entries(countryData.languages).map(([code, name]) => (
            // Create paragraph element with an attribute to identify each paragraph 
            <p key={code}>{name}: {code}</p>
        ));
        // Check if there are any languages to display
        if (languageElements.length > 0) {
            // If there are languages, define variable to display the languages
            languageElement = (
                <div>
                    <h3>Languages:</h3>
                    {languageElements}
                </div>
            );
        }
    }
    

    if (countryData.flag) {
        flagElement = <img src={countryData.flags.png} alt={countryData.flags.alt} />;
    }

    // console.log(countryData.languages);

    return (
        <div>
            <figcaption>
                <h2>{countryData.name.common}</h2>
                {capitalElement}
                {continentElement}
                {currencyElement}
                {populationElement}
                {languageElement}
                {flagElement}
            </figcaption>
        </div>
    );
}
