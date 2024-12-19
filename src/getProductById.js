const getProductList = require('./getProductList')
const getProductById = (productId) => getProductList().find((item) => item.productId === productId)

module.exports = getProductById