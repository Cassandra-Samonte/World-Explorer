import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Gallery from '../Gallery'
import DetailsPage from '../DetailsPage'


// import './styles.css'

function App() {
  const [countries, setCountries] = useState([])

  // Query the API on component mount
  useEffect(() => {

    // Define an async function to JSONify the query response  
    async function getData() {
      const res = await fetch('https://restcountries.com/v3.1/all')
      const countries = await res.json()
      setCountries(countries.concat(countries))
    }

    // Call the async function
    getData()
  }, [])


  //  Create the HTML using JSX for the App component
    return (
    <>
    <h1>World Explorer</h1>
      {/* <Gallery countries={countries} /> */}

      {countries.length > 0 && (
        <div>
          {countries.map((country, index) => (
            <DetailsPage key={index} countryData={country} />
          ))}
        </div>
      )}
    </>
  )
}


export default App
