/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line */

// import libraries
import { React } from 'react'

// import Modules
import { GlobalStyle } from './css/MainAppCSS.jsx'
import HomePage from './pages/HomePage.jsx'

function MainApp() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  )
}

export default MainApp