/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
    <div class="faq-card">FAQ 1</div>
    <div class="faq-card">FAQ 2</div>
`;

const accordion = require('./accordion.js')
describe('FAQ card functionality', () => {
    test('DOMContentLoaded listener is triggered', () => {
        document.dispatchEvent(new Event('DOMContentLoaded'))
    })
    test('Clicking a FAQ card toggles the "active" class', () => {
        const faqCard = document.querySelector('.faq-card')
        faqCard.click()
        expect(faqCard.classList.contains('active')).toBe(true)
    })
})