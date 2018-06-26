import React, {Component} from 'react'

class CartForm extends Component {
    state = {
        quantity: 0,
        product_id: 0
    }

    render() {
        const options = this.props.products.map(product => (<option key={product.id} value={product.id}>{product.name}</option>))
        return (
            <form onSubmit={(e) => {e.preventDefault(); this.props.addItem(this.state)}}>
                <select onChange={(e) => {this.setState({product_id: e.target.value})}}>
                    {options}
                </select>
                <input type="number" name="quantity" placeholder="Quantity" onChange={e=>this.setState({quantity: e.target.value})}/>
                <input type="submit" value="Submit"/>
            </form>
        )    
    }
}

export default CartForm