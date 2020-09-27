const test = require('ava');

const text = 'Lorem ipsum dolor sit amet.'

// Replace expected value ('') with proper value
test('String: split', t => {
    t.deepEqual(text.split(), '')
    t.deepEqual(text.split(' '), '')
    t.deepEqual(text.split('dolor'), '')
});