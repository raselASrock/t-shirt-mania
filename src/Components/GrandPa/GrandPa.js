import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import ('./GrandPa.css')

export const RingContext = createContext('Gold');
export const MoneyContext = createContext(555)

const GrandPa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555);
    // const ring = "Diamond_Ring"
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money, setMoney]}>
            <div className='grandpa'>
                <h2>Grand Papa</h2>
                <section className='flex'>
                    <Father house = {house}></Father>
                    <Uncle house = {house}></Uncle>
                    <Aunty house = {house}></Aunty>
                </section>
            </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default GrandPa;