const products = require('../app/controllers/products.controller');

const foo = products.foo;

const update = products.update;

test('adds 1 + 2 to equal 3', () => {
    expect(foo(1, 2)).toBe(3);
  });