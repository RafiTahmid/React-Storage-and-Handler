import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

// const Cosmetics = () => {
    // const first = 50;
    // const second = 30;
    // const total = add(first , second)

    const Cosmetics = () =>{
        const [cosmetics, setCosmetics] = useState([])

        useEffect( () =>{
            fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
        }, [])
    return (
        <div>
            <h1>Welcome to my Cosmetics Store</h1>
            {/* <h3>Total: {total}</h3> */}
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics
