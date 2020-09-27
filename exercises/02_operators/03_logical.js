const test = require('ava');

// Replace expected value (0) with true/false value
test('logical operators', t => {
    t.deepEqual(true && false, 0)
    t.deepEqual(true && true, 0)
    t.deepEqual(false && false, 0)
    t.deepEqual(true || false, 0)
    t.deepEqual(true || true, 0)
    t.deepEqual(false || false, 0)
    t.deepEqual(!false, 0)
    t.deepEqual(!'', 0)
    t.deepEqual(!!'', 0)
    t.deepEqual(!!'value', 0)
    t.deepEqual(!!{}, 0)
    t.deepEqual(!!null, 0)
    t.deepEqual(!!undefined, 0)
    t.deepEqual(!!(()=>false), 0)
});