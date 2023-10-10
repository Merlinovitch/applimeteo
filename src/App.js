import Data from './components/FetchData'
import React from 'react'

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
    
  }


  return (
    <div className='container'>
    < Data />
  
    </div>
  )
  }

export default App