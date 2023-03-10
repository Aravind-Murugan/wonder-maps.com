/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line */

// import libraries
import { React } from 'react'

// import Modules
import Logo from 'img/favicons/logo.png'
import DarkThemeToggle from 'app/components/DarkThemeToggle/DarkThemeToggle'

function HomePage() {
  return (
    <>
      <section id='HomePage-Section'>
        <img id="img-WGM-LOGO" src={Logo} alt="WGM-LOGO" />
        <DarkThemeToggle />Hello world...
      </section>
    </>
  )
}

export default HomePage