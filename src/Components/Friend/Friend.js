import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p><small>Gift: {house}</small></p>
            <button onClick={() => setHouse( house - 1)}>Decrease</button>
        </div>
    );
};

export default Friend;