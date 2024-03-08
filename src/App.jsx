import './App.css';
import Header from './header.jsx';
import Gallery from './gallery.jsx';
import Footer from './Footer.jsx';
import SelectedBeasts from './selectedbeasts.jsx'; // Corrected component name

import 'bootstrap/dist/css/bootstrap.min.css';
import beastData from "./assets/data.json";
import { useState } from 'react';

function App() {
  let [show, setShow] = useState(false);
  let [beast, setBeast] = useState(null);
  
  const showModal = obj => {
    setBeast(obj);
    setShow(true); 
  }

  const closeModal = () => {
    setShow(false);
  }

  return (
    <>
      <Header />
      <SelectedBeasts showbool={show} onHide={closeModal} selectbeast={beast} /> {/* Corrected prop name */}
      <Gallery beastData={beastData} onClick={showModal} /> {/* Corrected component name */}
      <Footer />
    </>
  )
}

export default App;
