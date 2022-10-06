import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let total = 0;
    let totalShipping = 0;
    let productQuantity = 0;
    for (const product of cart) {
        const { quantity, price, shipping } = product;
        productQuantity = productQuantity + quantity;
        total = total + (price * quantity);
        totalShipping = totalShipping + shipping;
    }
    const tax = (total * .1).toFixed(2);
    const grandTotal = total + totalShipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h3 className='summery-title'>Order Summery</h3>
            <div className='summery-details'>
                <p>Selected Items: {productQuantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax}</p>
                <p className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</p>
            </div>
            <button className='clear-btn'>Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
            <button className='review-btn'>Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
    );
};

export default Cart;