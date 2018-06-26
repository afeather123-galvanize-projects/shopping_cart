import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import CartItemsComponent from './components/CartItems';
import CartForm from './components/CartForm';

class App extends Component {
  copyright = '2016'

  state = {
    cartItemsList: [],
    products: []
  }

  async componentDidMount() {
    this.LoadItems()
  }

  async LoadItems() {
    const products = await this.LoadProducts()
    const response = await fetch('http://localhost:8082/api/items')
    const json = await response.json()
    let prod_obj = {}
    products.forEach(product => prod_obj[product.id] = product)
    console.log(json)
    this.setState({cartItemsList: json.map(product => ({product: prod_obj[product.product_id], quantity: Math.ceil(Math.random() * 5)}))})
  }

  async LoadProducts() {
    const response = await fetch('http://localhost:8082/api/products')
    const json = await response.json()
    this.setState({products: json})
    return json  
  }

  // componentDidMount() {
  //   fetch('http://localhost:8082/api/items')
  //   .then(result => result.json()
  //   .then(json => this.setState({cartItemsList: json.map(product => ({product: product, quantity: Math.ceil(Math.random() * 5)}))})))
  // }

  addItem = async (formInput) => {
    const response = await fetch('http://localhost:8082/api/items', {
      method: 'POST',
      body: JSON.stringify({product_id: Number(formInput.product_id), quantity: formInput.quantity}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const item = await response.json()
    console.log(item)
    const itemWProduct = {...item, product: this.state.products.filter(product => product.id === item.product_id)[0]}
    this.setState({cartItemsList: [...this.state.cartItemsList, itemWProduct]})
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <CartItemsComponent cartItemsList={this.state.cartItemsList}/>
        <CartForm products={this.state.products} addItem={this.addItem}/>
        <FooterComponent copyright={this.copyright}/>
      </div>
    );
  }
}

export default App;
