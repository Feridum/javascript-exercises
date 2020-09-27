const test = require('ava');

//Change code inside function to make the test pass - use .map()
const calculate = (values) => {
    return values
}

//Change code inside function to make the test pass - use .reduce()
const createStructureForSelect = (values) => {
    return values
}

//Don't modify code below
test('Array .map()', t => {
    t.deepEqual(calculate([1, 2, 3]), [2, 4, 6])
});


test('Create structure for select using .map()', t => {
    t.deepEqual(createStructureForSelect([1, 2, 3]), [
        {label: 'Label1', value: 1},
        {label: 'Label3', value: 3},
        {label: 'Label3', value: 3}
    ])
});