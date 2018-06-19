import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import CartItemsComponent from './components/CartItems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <CartItemsComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
