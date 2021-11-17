const Order = require('./order')

test('Order#basePrice', () => {
  const item = { price: 1000 };
  const order = new Order(3, item);
  expect(order.price).toEqual(2850);
})
