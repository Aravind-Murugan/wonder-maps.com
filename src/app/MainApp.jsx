/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line */

// import libraries
import { React, useState, useEffect } from 'react'
import { Provider as ReduxProvider } from "react-redux";

// import Modules
import { GlobalStyle } from './css/MainAppCSS.jsx'
import HomePage from './pages/HomePage.jsx'
import PreLoader from './components/PreLoader/PreLoader.jsx'
import DarkThemeProvider from './components/DarkThemeToggle/DarkThemeProvider.js';
import store from "redux/store";

function MainApp() {
  const [completed, setcompleted] = useState(undefined)
  useEffect(() => {
    setTimeout(() => {
      setcompleted(true)
    }, 5000)
  })
  return (
    <>
      <ReduxProvider store={store}>
        <DarkThemeProvider>
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
        </DarkThemeProvider>
      </ReduxProvider>
    </>
  )
}

export default MainApp