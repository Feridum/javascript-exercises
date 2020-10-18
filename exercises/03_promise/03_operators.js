const test = require('ava');

const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'resolve 100'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'resolve 200'));
const reject1 = new Promise((resolve, reject) => setTimeout(reject, 150, 'reject 150'));


test.cb('Promise.all() without reject', t => {
    //choose if Promise will be resolved or rejected and write expected value
    Promise.all([promise1, promise2]).then(data=>{
        t.deepEqual(data, '')
        t.end()
    }).catch(data=>{
        t.deepEqual(data, '')
        t.end()
    })
});

test.cb('Promise.all() with reject', t => {
    //choose if Promise will be resolved or rejected and write expected value
    Promise.all([promise2, reject1]).then(data=>{
        t.deepEqual(data, '')
        t.end()
    }).catch(data=>{
        t.deepEqual(data, '')
        t.end()
    })
});

test.cb('Promise.allSettled() without reject', t => {
    //choose if Promise will be resolved or rejected and write expected value
    Promise.allSettled([promise1, promise2]).then(data=>{
        t.deepEqual(data, '')
        t.end()
    }).catch(data=>{
        t.deepEqual(data, '')
        t.end()
    })
});

test.cb('Promise.allSettled() with reject', t => {
    //choose if Promise will be resolved or rejected and write expected value
    Promise.allSettled([promise2, reject1]).then(data=>{
        t.deepEqual(data, '')
        t.end()
    }).catch(data=>{
        t.deepEqual(data, '')
        t.end()
    })
});

test.cb('Promise.race() without reject', t => {
    //choose if Promise will be resolved or rejected and write expected value
    Promise.race([promise1, promise2]).then(data=>{
        t.deepEqual(data, '')
        t.end()
    }).catch(data=>{
        t.deepEqual(data, '')
        t.end()
    })
});

test.cb('Promise.race() with reject (reject is first)', t => {
    //choose if Promise will be resolved or rejected and write expected value
    Promise.race([promise2, reject1]).then(data=>{
        t.deepEqual(data, '')
        t.end()
    }).catch(data=>{
        t.deepEqual(data, '')
        t.end()
    })
});

test.cb('Promise.race() with reject (promise is first)', t => {
    //choose if Promise will be resolved or rejected and write expected value
    Promise.race([promise1, reject1]).then(data=>{
        t.deepEqual(data, '')
        t.end()
    }).catch(data=>{
        t.deepEqual(data, '')
        t.end()
    })
});