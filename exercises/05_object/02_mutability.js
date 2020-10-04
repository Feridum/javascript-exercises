const test = require('ava');


const simple = {
    foo: 'foo',
    bar: 'bar'
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
const seal = Object.seal({
    foo: 'foo',
    bar: 'bar'
})
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
const freeze = Object.freeze({
    foo: 'foo',
    bar: 'bar'
})

// Replace expected value ('') with proper value
test('const adding', t => {
   simple.fooBar = 'fooBar';
   t.deepEqual(simple.fooBar, '')
});
test('const deleting', t => {
    delete simple.foo;
    t.deepEqual(simple.foo, '')
});
test('const edit', t => {
    simple.bar = 'BAR'
    t.deepEqual(simple.bar, '')
});

test('seal adding', t => {
    seal.fooBar = 'fooBar';
    t.deepEqual(seal.fooBar, '')
});
test('seal deleting', t => {
    delete seal.foo;
    t.deepEqual(seal.foo, '')
});
test('seal edit', t => {
    seal.bar = 'BAR'
    t.deepEqual(seal.bar, '')
});

test('freeze adding', t => {
    freeze.fooBar = 'fooBar';
    t.deepEqual(freeze.fooBar, '')
});
test('freeze deleting', t => {
    delete freeze.foo;
    t.deepEqual(freeze.foo, '')
});
test('freeze edit', t => {
    freeze.bar = 'BAR'
    t.deepEqual(freeze.bar, '')
});