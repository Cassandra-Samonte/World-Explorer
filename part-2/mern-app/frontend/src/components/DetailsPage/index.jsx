import CommentSection from '../CommentSection'

export default function DetailsPage({ capital, continents, currencies, population, languages, flags, name, cca3 }) {
    // console.log(capital)

    // Initialize variables with default values
    let capitalElement = <p>No capital data available</p>;
    let continentElement = <p>No continent data available</p>;
    let currencyElement = <p>No currency data available</p>;
    let populationElement = <p>No population data available</p>;
    let languageElement = <p>No language data available</p>;
    let flagElement = null;

    // Conditionally render each item if they exist
    if (capital) {
        capitalElement = <p>{capital}</p>;
    }

    if (continents) {
        continentElement = <p>{continents.join(', ')}</p>;
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
            <p>{currencyName} ({currencySymbol})</p>
        );
    }

    if (population) {
        populationElement = <p>{population}</p>;
    }

    if (languages) {
        // Convert the object into an array of language names
        const languageNames = Object.values(languages);

        // Check if there are any languages to display
        if (languageNames.length > 0) {
            // If there are languages, define a variable to display the languages
            languageElement = (
            <div>
                <ul>
                {languageNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
                </ul>
            </div>
            );
        }
    }

    if (flags) {
        flagElement = <img src={flags.svg} alt={flags.alt} />;
    }

    // console.log(countryData.languages);

    return (
        <>
            {/* Hero Flag Image */}
            <div className="relative w-full p-10">
                <img
                    src={flags.svg}
                    alt={flags.alt}
                    className="w-full h-auto max-w-full opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-4xl text-gray">{name.common}</h2>
                </div>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {/* Country Info - Left Container */}
                <div className="bg-white p-4 rounded shadow-md">
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="font-semibold">Capital:</td>
                                <td>{capitalElement}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Continent:</td>
                                <td>{continentElement}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Currency:</td>
                                <td>{currencyElement}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Population:</td>
                                <td>{populationElement}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Language:</td>
                                <td>{languageElement}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Comments - Right Container */}
                <div className="bg-white p-4 rounded shadow-md">
                    <CommentSection countryId={cca3} />
                </div>
            </div>
        </>
    );
}
