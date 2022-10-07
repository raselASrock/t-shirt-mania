import React from 'react';
import ('./Tshirt.css')

const Tshirt = ({tshirt}) => {
    const {name, picture, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: $ {price}</h4>
            <button>Buy Now</button>
        </div>
    );
};

export default Tshirt;