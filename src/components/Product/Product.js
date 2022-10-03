import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, price, name, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-detail'>
                <p className='product-name'>{name}</p>
                <p className='price'>Price : ${price}</p>
            </div>
            <div className='seller-detail'>
                <p className='seller'>Manufacturer: {seller}</p>
                <p className='rating'>Rating: {ratings} <i class="fa-solid fa-star"></i></p>
            </div>
            <button className='cart-btn'>Add To Cart <i class="fa-solid fa-cart-plus"></i></button>
        </div>
    );
};

export default Product;