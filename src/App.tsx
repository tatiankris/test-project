import './App.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import './App.css'
import React from "react";
import leftDecorate from './assets/leftDecorate.svg'
import rightDecorate from './assets/rightDecorate.svg'


function App() {


  return (
    <div className={'app'}>
        <img className={'leftDecorate'} src={leftDecorate} />
        <img className={'rightDecorate'} src={rightDecorate} />

        <div className={'container'}>
            <Header />
            <Main />
        </div>
        <Footer />

    </div>
  )
}

export default App
