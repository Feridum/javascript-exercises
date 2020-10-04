const test = require('ava');

const profile = {
    name: 'John',
    lastname: 'Doe',
    image: {
        src: 'some url'
    }
}
// Replace expected value ('') with proper value
test('object destructuring', t => {
    const {name, lastname, image} = profile;
    t.deepEqual(name, '')
    t.deepEqual(lastname, '')
    t.deepEqual(image, '')
});

test('object deep destructuring', t => {
    const {name, lastname, image: {src}} = profile;
    t.deepEqual(name, '')
    t.deepEqual(lastname, '')
    t.deepEqual(src, '')
});

test('array destructuring with rest', t => {
    const {name, ...rest} = profile;
    t.deepEqual(name, '')
    t.deepEqual(rest, '')
});

test('array destructuring with default value', t => {
    const {name, age = 18} = profile;
    t.deepEqual(name, '')
    t.deepEqual(age, '')
});

test('array destructuring with rename', t => {
    const {name: firstname, lastname} = profile;
    t.deepEqual(firstname, '')
    t.deepEqual(lastname, '')
});
