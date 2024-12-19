/**
 * @jest-environment jsdom
 */

const addToCart = require('./addToCart.js')

describe('addToCart', () => {
    let localStorageMock;

    beforeEach(() => {
        localStorageMock = (() => {
            let store = {};
            return {
                getItem: jest.fn((key) => store[key] || null),
                setItem: jest.fn((key, value) => {
                    store[key] = value;
                }),
                clear: jest.fn(() => {
                    store = {};
                }),
            };
        })();

        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock,
        });
        // Clear the localStorage before each test
        window.localStorage.clear();
        jest.clearAllMocks();
    });

    it('should add a product item to an empty cart', () => {
        const productItem = { id: 1, name: 'Test Product', price: 100 };

        addToCart(productItem);

        const cartItems = JSON.parse(window.localStorage.getItem('cartItems'));
        expect(cartItems).toEqual([productItem]);
    }); 
});
