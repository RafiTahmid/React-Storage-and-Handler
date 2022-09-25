import React from 'react';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic

    const addToCart = () => {
        console.log('Item Added', id)
    }
    return (
        <div className='product'>
            <h2>Buy this:{name}</h2>
            <p>Only for: ${price}</p>
            <p><small>It has id: {id}</small></p>
            
            <button onClick={() => addToCart(id)}>Add To Cart</button>
        </div>
    );
};

export default Cosmetic;