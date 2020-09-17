const test = require('ava');

// Fill expected values to make the test pass
test('Array Modifiers: pop, shift, push, unshift', t => {
    t.is([1,2,3].pop(), 0)
    t.is([1,2,3].shift(), 0)

    const arr_push = [1,2,3,4];
    t.is(arr_push.push(6), 0)
    t.is(arr_push, [])

    const arr_unshift = [1,2,3,4];
    t.is([1,2,3,4].unshift(6), 0)
    t.is(arr_unshift, [])

});