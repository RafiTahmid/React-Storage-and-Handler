import React from 'react';
import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 50;
    const second = 30;
    const total = add(first , second)
    return (
        <div>
            <h1>Welcome to my Cosmetics Store</h1>
            <h3>Total: {total}</h3>
        </div>
    );
};

export default Cosmetics;