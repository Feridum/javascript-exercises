const test = require('ava');

//Change code inside function to make the test pass - use .reduce()
const sum = (values) => {
    return values
}

//Change code inside function to make the test pass - use .reduce()
const createDictionary = (values) => {
    return values
}


//Don't modify code below
test('Sum array using .reduce()', t => {
    t.deepEqual(sum([]), 0)
    t.deepEqual(sum([1,2,3]), 6)
    t.deepEqual(sum([1,2,3,4,5]), 15)
});

const items = [
    {
        id: 'name1',
        value: 1
    },
    {
        id: 'name2',
        value: 2
    },
    {
        id: 'name3',
        value: 3
    }
]

test('Create dictionary structure using .reduce()', t => {
    t.deepEqual(createDictionary(items), {
        'name1': {
            id: 'name1',
            value: 1
        },
        'name2': {
            id: 'name2',
            value: 2
        },
        'name3': {
            id: 'name3',
            value: 3
        },
    })
});