import React from 'react';
import cart from '../../assets/cart.svg';


function CartWidget() {
    return (
        <img className="d-flex" src={cart} />
    )
}

export default CartWidget