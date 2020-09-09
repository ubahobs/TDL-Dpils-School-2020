const assert = require('chai').assert;
const app = require('../app.js');

// describe('App', function() {
//     it('app should return hello', function () {
//         assert.equal(app.sayHello(), 'hello');
//     });
//     it('app sayHello should return string', function () {
//         assert.typeOf(app.sayHello(), 'string');
//     })
// });

// describe('App', function() {
//     it('app should return 6', function () {
//         assert.equal(app.addNumbers(2, 4), 6);
//     });
//     it('app addNumber should return number', function () {
//         assert.typeOf(app.addNumbers(2, 4), 'number')
//     });
//     it('app should strict ...', function () {
//         assert.strictEqual(app.addNumbers(2, 4), 6);
//     });
//     it('app should not ...', function () {
//         assert.notEqual(app.addNumbers(2, 4), 7);
//     });
//     it('app should greater then 3 ...', function () {
//         assert.isAbove(app.addNumbers(2, 4), 3);
//     });
//     it('app should be less then 10 ...', function () {
//         assert.isBelow(app.addNumbers(2, 4), 10);
//     });
//     it('app should exist ...', function () {
//         assert.exists(app.addNumbers(2, 4), 6);
//     })
// })
let object =  {
    a: 1,
    b: 2
}
describe('App', function() {
    it('app should return array', function () {
        assert.exists(app.toArray(object));
    });
    it('app should return array', function () {
        assert.typeOf(app.toArray(object), 'array');
    });
})