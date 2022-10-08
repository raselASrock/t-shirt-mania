import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import ('./GrandPa.css')

const GrandPa = () => {
    return (
        <div className='grandpa'>
            <h2>Grand Papa</h2>
            <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default GrandPa;