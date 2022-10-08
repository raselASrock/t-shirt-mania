import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({house, ring}) => {
    return (
        <div>
            <h2>My Cousine </h2>
            <p><small>House: {house}</small></p>
            <section>
                <Friend ring = {ring}></Friend>
            </section>
        </div>
    );
};

export default Cousin;