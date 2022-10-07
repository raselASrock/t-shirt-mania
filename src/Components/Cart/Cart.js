import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Order Quantity: {cart.length}</h4>
        </div>
    );
};

export default Cart;