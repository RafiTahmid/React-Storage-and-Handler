import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 10;
    const second = 5;
    const result = multiply(first, second);
    return (
        <div>
            <h1>This is Shoes component</h1>
            <h3>Result: {result}</h3>
        </div>
    );
};

export default Shoes;