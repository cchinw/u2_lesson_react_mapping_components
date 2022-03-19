import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSideBar'
import countries from './components/countries'
import CountryItems from './components/CountryItems'
import React from 'react'
import './App.css'

const App = () => {
  console.log(countries)
  return (
    <div className="flex-row">
      <LeftSideBar />
      <RightSideBar>
        <ul>
          {/* {countries.map((country) => (
            <li key={country.capitol}>
              <h3>Country: {country.name}</h3>
              <h5>Capital: {country.capitol}</h5>
            </li>
          ))} */}
          {countries.map((country) => (
            <CountryItems
              key={country.capitol}
              capitol={country.capitol}
              name={country.name}
            />
          ))}
        </ul>
      </RightSideBar>
    </div>
  )
}

export default App
