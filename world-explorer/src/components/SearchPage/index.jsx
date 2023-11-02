import { useState } from "react"
import Gallery from '../Gallery'

export default function SearchPage(props) {
    const [query, setQuery] = useState('');
    const [queryResults, setQueryResults] = useState([]); 

    async function getData(url) {
        const res = await fetch(url);
        const data = await res.json();
        setQueryResults(data);
    }

    function handleQuerySubmit(event) {
        event.preventDefault();
        getData(`https://restcountries.com/v3.1/name/${query}`); 
    }

    return (
        <div>
            <form onSubmit={handleQuerySubmit}>
                <label htmlFor="search">
                    <h1>Search for a Country</h1>
                </label>
                <br />
                <input
                    name="search"
                    placeholder="Search for a country..."
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
                <button type="submit">
                    Search
                </button>
            </form>

            <Gallery
                countries={queryResults}
                refreshQueue={getData}
                url={`https://restcountries.com/v3.1/name/${query}`} 
                updateDetails={props.setDetailsData}
            />
        </div>
    );
}