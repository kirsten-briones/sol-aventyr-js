const getProductById = require('./getProductById')
const getProductList = require('./getProductList')

describe('test getProductById', () =>  {
    const productList = getProductList()

    it('get product by id', () => {
        const productItem1 = getProductById(1)
        expect(productItem1).toStrictEqual(productList[0])
    })
}) 