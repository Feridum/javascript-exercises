const test = require('ava');

//Don't modify this function
const divideCallback = (a, b, callback) => {
    if (b === 0) {
        callback(new Error('Divide by 0 is forbidden', null))
    }
    callback(null, a / b)
}

//Modify function below to use divideCallback and make test pass
const dividePromise = (a, b) => {
    return a/b
}

// Don't change code below
test.cb('Promise valid arguments', t => {
    dividePromise(10, 2).then(data => {
        t.is(data, 5)
        t.end()
    })
});

test.cb('Promise invalid arguments', t => {
    dividePromise(10, 0).catch(data => {
        t.is(data.message, 'Divide by 0 is forbidden')
        t.end()
    })
});