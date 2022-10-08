import React from 'react';
import { useContext } from 'react';
import { MoneyContext } from '../GrandPa/GrandPa';

const Sister = ({house}) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Hey Sister, What's UP!!!!</h2>
            <p><small>House: {house}</small></p>
            <p><small>Money:$ {money}</small></p>
            <button onClick={() => setMoney( money + 1000)}>Add $1000</button>
        </div>
    );
};

export default Sister;