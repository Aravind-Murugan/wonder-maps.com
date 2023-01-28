/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line */

// import libraries
import { React } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

// import Modules
import * as GlobePreLoaderJson from './json/globePreLoader.json'

function PreLoader() {
  return (
    <>
      <section id='PerLoader-Section' className="App-PerLoader">
        <Player autoplay loop src={GlobePreLoaderJson} style={{height: '400px', width: '400px'}} />
      </section>
    </>
  )
}

export default PreLoader