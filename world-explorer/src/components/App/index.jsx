import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import HomePage from '../HomePage'
import DetailsPage from '../DetailsPage'
import SearchPage from '../SearchPage'
// import './styles.css'

function App() {
  // Store API Data 
  const [countries, setCountries] = useState([])
  const [detailsData, setDetailsData] = useState({})

    // Define an async function to JSONify the query response  
    async function getData(url) {
      const res = await fetch(url)
      const countries = await res.json()
      setCountries(countries)
    }

  // Query the API on component mount
  useEffect(() => {
    getData('https://restcountries.com/v3.1/all')
  }, [])


  //  Create the HTML using JSX for the App component
  return (
    <>
      {/* The Nav Bar */}
      <nav>
            <div>
              <Link to="/">
                <h2>World Explorer</h2>
              </Link>
            </div>
            <div>
              <ul>
                <li>
                  <Link to="/search">
                    <h4>Search for a Country</h4>
                  </Link>
                </li>
              </ul>
            </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={
          <HomePage
            countries={countries}
            getData={getData}
            setDetailsData={setDetailsData}
          />}
        />
        <Route path="/search" element={<SearchPage setDetailsData={setDetailsData} />} />
        <Route path="/details" element={<DetailsPage {...detailsData} />} />
      </Routes>

    </>
  )


}


export default App
