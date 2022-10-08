import React from 'react';
import { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import ('./GrandPa.css')

const ringContext = createContext('Gold')

const GrandPa = () => {
    const house = 7;
    const ring = "Diamond_Ring"
    return (
        <div className='grandpa'>
            <h2>Grand Papa</h2>
            <section className='flex'>
                <Father house = {house} ring = {ring}></Father>
                <Uncle house = {house}></Uncle>
                <Aunty house = {house} ring = {ring}></Aunty>
            </section>
        </div>
    );
};

export default GrandPa;