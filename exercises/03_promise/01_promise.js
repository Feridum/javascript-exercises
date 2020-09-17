const test = require('ava');


const promiseResolve = () => {
    return 1; //Change this line to make the test pass
}

const promiseReject = () => {
    return 2; //Change this line to make the test pass
}

// Don't change code below
test.cb('Promise resolve', t => {
    promiseResolve().then(data=>{
        t.is(data, 1)
        t.end()
    })
});

test.cb('Promise reject', t => {
    promiseReject().catch(data=>{
        t.is(data, 2)
        t.end()
    })
});