const test = require('ava');

const array = [1,2,3]

// Replace expected value (0) with true/false value
test('array destructuring', t => {
    const [a, b,c] = array;
    t.deepEqual(a, 0)
    t.deepEqual(b, 0)
    t.deepEqual(c, 0)
});

test('array destructuring with rest', t => {
    const [a, ...rest] = array;
    t.deepEqual(a, 0)
    t.deepEqual(rest, 0)
});

test('array destructuring with default value', t => {
    const [a,b,c,d=4] = array;
    t.deepEqual(a, 0)
    t.deepEqual(b, 0)
    t.deepEqual(c, 0)
    t.deepEqual(d, 0)
});

test('array destructuring with ignore', t => {
    const [a,,b] = array;
    t.deepEqual(a, 0)
    t.deepEqual(b, 0)
});