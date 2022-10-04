import './App.css'
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/home'
import ConnectWallet from './components/connect/connectWallet'
// import Landing from './components/Landing/landing'


function App() {

  return (
    <div className="App">
      <Routes>
            <Route exact path='/' element={ <ConnectWallet/>}/> : 
            {/* <Route exact path='/' element={<Home/>} /> */}


      </Routes>
    </div>
  )
}

export default App
