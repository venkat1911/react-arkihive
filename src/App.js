import React, { Component } from 'react';
import Header from './Component/Header';
import Getstarted from './Component/Getstarted';
import Construction from './Component/Construction';
import Howitworks from './Component/Howitworks';
import Testimonial from './Component/Testimonial';
import Footer from './Component/Footer';
//import logo from './images/logo.png'
import './App.css';


class App extends Component {
  
  render() 
  {  
    
      return (
        <div>
        <Header />
        <Getstarted />
        <Construction />
        <Howitworks />
        <Testimonial />
        <Footer />
        </div>
     );
  }
}

export default App;
