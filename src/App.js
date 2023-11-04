import React from 'react'
import './App.css';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Herosection from './compoments/Herosection'
import Bull from './compoments/Bull';
import Core from './compoments/Core';
import Eefe from './compoments/Eefe';
import Partners from './compoments/Partners';
import Supply from './compoments/Supply';
import Contant from './compoments/Contant';
import Footer from './compoments/Footer';
import Cases from './compoments/Cases';
import { Team } from './compoments/Team';
import Roadmap from './compoments/Roadmap';

const App = () => {
  return (
    <>
      <Herosection />
      <Bull />
      <Core />
      <Eefe />
      <Supply />
      <Cases />
      <Team />
      <Partners />
      <Roadmap />
      <Contant />
      <Footer />
    </>
  )
}

export default App