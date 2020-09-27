const test = require('ava');

const text = 'Lorem ipsum dolor sit amet.'

// Replace expected value ('') with proper value
test('String: slice', t => {
    t.deepEqual(text.slice(0), '')
    t.deepEqual(text.slice(5), '')
    t.deepEqual(text.slice(5, 10), '')
    t.deepEqual(text.slice(-5), '')
    t.deepEqual(text.slice(-5, -10), '')
});