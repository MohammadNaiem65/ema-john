import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ addToCart, product }) => {
    const { img, price, name, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-detail'>
                <p className='product-name'>{name}</p>
                <p className='price'>Price : ${price}</p>
            </div>
            <div className='seller-detail'>
                <p className='seller'>Manufacturer: {seller}</p>
                <p className='rating'>Rating: {ratings} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></p>
            </div>
            <button onClick={() => addToCart(product)} className='cart-btn'><p className='btn-text'>Add To Cart</p> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;