
const emptyCart = () => {
    window.localStorage.setItem('cartItems', JSON.stringify([])) 
}

module.exports = emptyCart
