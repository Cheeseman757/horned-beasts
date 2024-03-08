
import './App.css'
import Header from './header.jsx'
import Gallery from './gallery.jsx'
import Footer from './Footer.jsx'
import selectedbeasts from './selectedbeasts.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import beastData from "./assets/data.json"
import { useState } from 'react'

function App() {
  let [show, setShow] = useState(false);
  let [beast, setBeast] = useState(null);
  
  const showModal = obj => {
    setBeast(obj)
    setShow(true); 
  }

  const closeModal = () => {
    setShow(false);
  }

  return (
    <>
      <Header />
      <selectedbeasts showbool={show} onHide={closeModal} selectedbeasts={beast} />
      <gallery beastData={beastData} onClick={showModal}  />
      <footer />
    </>
  )
}

export default App
