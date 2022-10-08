import React from 'react';
import ('./Cart.css')

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
            <h2 className={cart.length === 2 ? `orange`:`purple`}>Order Summary</h2>
            <h4 className={`bold ${cart.length === 2 ? "blue" : "yellow"}`}>Order Quantity: {cart.length}</h4>
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
            <p>And Operator</p>
            {cart.length === 2 && <h2>Double Item</h2> } 
            <p>Or Operator</p>
            {cart.length === 4 || <h5>4 Items Not Select</h5> }
        </div>
    );
};

export default Cart;


/* 
Conditional Rendaring
1. use element in a veriable  and then use if-else to set value.
2. ternary operator  consition ? true : false
3. && and operator (if condition is true, it show its value.)
4. || or operator (if condition is false, it show its value.)
*/