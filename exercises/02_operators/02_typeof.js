const test = require('ava');

// Replace expected value ('') with proper value
test('typeof operator', t => {
    t.deepEqual(typeof 1, '')
    t.deepEqual(typeof 'test', '')
    t.deepEqual(typeof {}, '')
    t.deepEqual(typeof true, '')
    t.deepEqual(typeof new Date(), '')
    t.deepEqual(typeof (()=>true), '')
    t.deepEqual(typeof null, '')
    t.deepEqual(typeof undefined, '')
});