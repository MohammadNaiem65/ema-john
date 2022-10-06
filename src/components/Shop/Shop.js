import React, { useEffect, useState } from 'react';
import { addToDataBase, getStoredData } from '../../utilities/fakedbRevice';
import Cart from '../Cart/Cart';
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
    const addToCart = selectedProduct => {
        const exist = cart.find(product => product.id === selectedProduct.id);
        let newCart = [];
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart)
        addToDataBase(selectedProduct.id)
    }

    useEffect(() => {
        const storedCart = getStoredData();
        let savedCartProducts = [];
        for (const id in storedCart) {
            const cartProduct = products.find(product => product.id === id);
            if (cartProduct) {
                const quantity = storedCart[id];
                cartProduct.quantity = quantity;
                savedCartProducts.push(cartProduct);
            }
        }
        setCart(savedCartProducts);
    }, [products])
    return (
        <div className='checkout-section'>
            <div className="products">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='order-summery'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;