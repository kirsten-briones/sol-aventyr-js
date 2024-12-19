const getProductList = () => {
    return [{
        productId: 1,
        title: 'Maldives',
        description: 'The Maldives is the smallest country in Asia.',
        imageUrl: 'https://en.wikipedia.org/wiki/Maldives#/media/File:Bathala_(Maldives)_8.JPG',
        price: 15000,
        currency: 'KR'
    }, {
        productId: 2,
        title: 'Paris',
        description: 'Paris is the capital and largest city of France.',
        imageUrl: 'https://en.wikipedia.org/wiki/Paris#/media/File:La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_ao%C3%BBt_2014_(2).jpg',
        price: 5000,
        currency: 'KR'
    }]
}

module.exports = getProductList