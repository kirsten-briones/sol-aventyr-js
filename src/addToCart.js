const addToCart = (productItem) => {
    let cartItems = JSON.parse(window.localStorage.getItem('cartItems'))
    if (!cartItems) {
        cartItems = []     
    } 
    cartItems.push(productItem) 
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

module.exports = addToCart