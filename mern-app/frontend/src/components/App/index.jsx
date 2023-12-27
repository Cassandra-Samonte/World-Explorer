import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import myLogo from '../../assets/world-logo.png'; 
import HomePage from '../HomePage'
import DetailsPage from '../DetailsPage'
import SearchPage from '../SearchPage'

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
    <nav className="bg-gray-200 py-4 px-6 flex justify-between items-center">

    <div className="flex items-center"> 
      <img src={myLogo} alt="World Explorer Logo" className="w-12 h-12" />
      <Link to="/">
        <h2 className="text-lg font-bold text-gray-700 px-3">World Explorer</h2>
      </Link>
    </div>

    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search for a country..."
        className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
      />
      <Link to="/search">
        <button className="bg-gray-300 text-gray-700 rounded-md py-2 px-4 ml-2 focus:outline-none">
          Search
        </button>
      </Link>
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