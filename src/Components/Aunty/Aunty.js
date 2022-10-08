import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({house, ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <p>House: {house}</p>
            <section className='flex'>
                <Cousin house = {house} ring = {ring}></Cousin>
                <Cousin house = {house}></Cousin>
                <Cousin house = {house}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;