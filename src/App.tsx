import './App.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import './App.css'
import React from "react";
import leftDecorate from './assets/leftDecorate.svg'
import rightDecorate from './assets/rightDecorate.svg'
import Gallery from './components/gallery/Gallery';


function App() {
  return (
    <div className={'app'}>
        <img className={'leftDecorate'} src={leftDecorate} />
        <img className={'rightDecorate'} src={rightDecorate} />
        <div className={'container'}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
        <Gallery/>
    </div>
  )
}

export default App
