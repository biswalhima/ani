import { useState } from 'react'

import './App.css'
import Lottie from "lottie-react";
import an from "./ani.json"
function App() {
  

  return (
    <>
      <div className='App'>
      <div>
      <Lottie animationData={an} loop={true} />;
      </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
