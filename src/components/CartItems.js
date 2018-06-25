import React from 'react';
import CartItem from './CartItem';

const CartItemsComponent = ({cartItemsList}) => {
    return (
        <div className="container">
            <h1>Items</h1>
            <ul>
                {cartItemsList.map(item => (<CartItem key={item.product.id} item={item}/>))}
            </ul>
        </div>
    )
}

export default CartItemsComponent;