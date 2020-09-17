const test = require('ava');

//Change code inside function to make the test pass - use .map()
const calculate = (values) => {
    return values
}

//Don't modify code below
test('Array .map()', t => {
    t.deepEqual(calculate([1,2,3]), [2,4,6])
});
