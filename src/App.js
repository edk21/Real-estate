import React, {useState} from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import GlobalStyle from './GlobalStyles'
import {SliderData} from './data/SliderData'
import DropDown from './components/DropDown'
import InfoSection from './components/InfoSection'
import { InfoData } from './data/InfoData'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
    </div>
  );
}

export default App;
