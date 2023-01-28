/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line */

// import libraries
import { React, useState, useEffect } from 'react'

// import Modules
import { GlobalStyle } from './css/MainAppCSS.jsx'
import HomePage from './pages/HomePage.jsx'
import PreLoader from './components/PreLoader/PreLoader.jsx'

function MainApp() {
  const [completed, setcompleted] = useState(undefined)
  useEffect(() => {
    setTimeout(() => {
      setcompleted(true)
    }, 5000)
  })
  return (
    <>
      <GlobalStyle />
      { !completed ? (
        <>
          <PreLoader />
        </>
      ) : (
        <>
          <HomePage />
        </>
      )
      }
    </>
  )
}

export default MainApp