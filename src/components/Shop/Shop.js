import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const [cart, setCart] = useState([])
    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='checkout-section'>
            <div className="products">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='order-summery' style={{ backgroundColor: 'rgba(255, 153, 0, 0.3)' }}>
                <h3 className='summery-title'>Order Summery</h3>
                <div className='summery-details'>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: $</p>
                    <p>Total Shipping Charge: $</p>
                    <p>Tax: $</p>
                    <p className='grand-total'>Grand Total: $</p>
                </div>
                <button className='clear-btn'>Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                <button className='review-btn'>Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Shop;