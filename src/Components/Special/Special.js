import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h2>VIP Person</h2>
            <p><small>House: {house}</small></p>
            
            <button onClick={() => setHouse( house + 1)}>Increase</button>
            
        </div>
    );
};

export default Special;