let cart = {};
const addToDataBase = id => {
    getStoredData()
    const quantity = cart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        cart[id] = newQuantity;
    }
    else {
        cart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
}

const getStoredData = () => {
    const storedData = localStorage.getItem('shopping-cart');
    if (storedData) {
        cart = JSON.parse(storedData);
    }
    return cart;
}

const removeFromDb = id => {
    const storedData = localStorage.getItem('shopping-cart');
    if (storedData) {
        const cart = JSON.parse(storedData);
        if (id in cart) {
            delete cart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(cart));
        }
    }
}

const deleteCart = () => {
    localStorage.removeItem('shopping-cart');
}

export { addToDataBase, getStoredData, removeFromDb, deleteCart }