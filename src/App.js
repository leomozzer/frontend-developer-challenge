import React from 'react';
import './styles/styles.css'
import Header from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer';
import Send from './components/Send';
//Imported the Header, Home, Footer and Send functions;

function App() {
    return (
      <div>
        <Header/>
        <Home/>
        <Send/>
        <Footer/>
      </div>
    );
}

export default App;
