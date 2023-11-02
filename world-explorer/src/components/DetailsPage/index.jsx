export default function DetailsPage({ capital, continents, currencies, population, languages, flags, name }) {
    console.log(capital)

    // Initialize variables with default values
    let capitalElement = <p>No capital data available</p>;
    let continentElement = <p>No continent data available</p>;
    let currencyElement = <p>No currency data available</p>;
    let populationElement = <p>No population data available</p>;
    let languageElement = <p>No language data available</p>;
    let flagElement = null;

    // Conditionally render each item if they exist
    if (capital) {
        capitalElement = <p>Capital: {capital}</p>;
    }

    if (continents) {
        continentElement = <p>Continents: {continents.join(', ')}</p>;
    }    

    if (currencies) {
        // Get an array of currency codes from the object, select the first currency code in the array
        const currencyCode = Object.keys(currencies)[0];
        // Access the name property of the currency
        const currencyName = currencies[currencyCode].name;
        // Access the symbol property of the currency
        const currencySymbol = currencies[currencyCode].symbol;
        // Define a variable to display the data
        currencyElement = (
            <p>Currency: {currencyName} ({currencySymbol})</p>
        );
    }

    if (population) {
        populationElement = <p>Population: {population}</p>;
    }

    if (languages) {
        // Convert the object into an array of [code, name] pairs
        // Then iterate through the array of languages
        const languageElements = Object.entries(languages).map(([code, name]) => (
            // Create a paragraph element with an attribute to identify each paragraph
            <p key={code}>{name}: {code}</p>
    ));
    // Check if there are any languages to display
    if (languageElements.length > 0) {
        // If there are languages, define a variable to display the languages
        languageElement = (
        <div>
            <h3>Languages:</h3>
            {languageElements}
        </div>
        );
    }
    }


    if (flags) {
        flagElement = <img src={flags.png} alt={flags.alt} />;
    }

    // console.log(countryData.languages);

    return (
        <div>
            <figcaption>
                <h2>{name.common}</h2>
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
