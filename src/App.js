import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import CartItemsComponent from './components/CartItems';

class App extends Component {
  copyright = '2016'

  state = {
    cartItemsList: []
  }

  // async componentDidMount() {
  //   const response = await fetch('http://localhost:8082/api/products')
  //   const json = await response.json()
  //   console.log(json)
  //   this.setState({cartItemsList: json.map(product => ({product: product, quantity: Math.ceil(Math.random() * 5)}))})
  // }

  componentDidMount() {
    fetch('http://localhost:8082/api/products')
    .then(result => result.json()
    .then(json => this.setState({cartItemsList: json.map(product => ({product: product, quantity: Math.ceil(Math.random() * 5)}))})))
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <CartItemsComponent cartItemsList={this.state.cartItemsList}/>
        <FooterComponent copyright={this.copyright}/>
      </div>
    );
  }
}

export default App;
