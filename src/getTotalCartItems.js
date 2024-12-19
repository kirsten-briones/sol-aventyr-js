const getTotalCartItems = () => {
    const cartItems = JSON.parse(window.localStorage.getItem('cartItems'))
    return cartItems.length  
}

module.exports = getTotalCartItems