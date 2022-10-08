import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {

    let message;
    if(cart.length === 0){
        message = <p>Please Buy Atleast One Item.</p>
    }
    else if(cart.length === 1){
        message = <div>
            <h2>Ammar jonno 1ta nau.</h2>
            <p><small>Sobar jonnoi.</small></p>
        </div>
    }
    else{
        message = <p>Thanks For Buying.</p>
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Order Quantity: {cart.length}</h4>
            {
                cart.map( tshirt => <p
                key={tshirt._id}
                >
                {tshirt.name}
                <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length === 3 ? <p>Tin jon ke gift diba?</p> : <p>Kino Kino....</p> }
        </div>
    );
};

export default Cart;


/* 
Conditional Rendaring
1. use element in a veriable  and then use if-else to set value.
2. ternary operator  consition ? true : false
*/