import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
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
      {countries.length}
    </>
  )
}


export default App
