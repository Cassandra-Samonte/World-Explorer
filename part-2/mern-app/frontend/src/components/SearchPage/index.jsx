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
        <div className="flex flex-col items-center pt-40">
            <form onSubmit={handleQuerySubmit} className="p-4">
                <label htmlFor="search" className="text-gray-700 font-semibold mb-2 flex flex-col items-center">Search for a Country</label>
                <div className="flex">
                    <input
                        name="search"
                        placeholder="Search for a country..."
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                        className="w-[50vw] border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    />
                    <button type="submit" className="bg-gray-300 text-gray-700 rounded-md py-2 px-4 ml-2 focus:outline-none">Search</button>
                </div>
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
  