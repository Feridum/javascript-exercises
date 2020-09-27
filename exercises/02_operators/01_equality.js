const test = require('ava');

// Replace expected value (0) with true/false value
test('Equality operator: == vs ===', t => {
    t.deepEqual(1 == '1', 0)
    t.deepEqual(1 === '1', 0)
    t.deepEqual(null == 0, 0)
    t.deepEqual(null === 0, 0)
    t.deepEqual('' == false, 0)
    t.deepEqual('' === false, 0)
    t.deepEqual(NaN == NaN, 0)
    t.deepEqual(NaN === NaN, 0)
});