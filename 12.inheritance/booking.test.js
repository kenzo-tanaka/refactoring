const Booking = require('./booking');
// client
function createBooking(show, date) {
  return new Booking(show, date);
};
function createPremiumBooking(show, date, extras) {
  const result = new Booking(show, date, extras);
  result._bePremium(extras);
  return result;
};

test('Booking#basePrice', () => {
  const show = {
    price: 1000,
    talkback: true
  };
  const aBooking = createBooking(show, '2021/11/17');
  aBooking.isPeakDay = true;
  expect(aBooking.basePrice).toBe(1150);
});

test('Booking#hasTalkback(true)', () => {
  const show = {
    price: 1000,
    talkback: true
  };
  const aBooking = createBooking(show, '2021/11/17');
  expect(aBooking.hasTalkback).toBe(true);
})

test('Booking#hasTalkback(false)', () => {
  const show = {
    price: 1000,
    talkback: true
  };
  const aBooking = createBooking(show, '2021/11/17');
  aBooking.isPeakDay = true;
  expect(aBooking.hasTalkback).toBe(false);
})

test('PremiumBooking#hasTalkback(true)', () => {
  const show = {
    price: 1000,
    talkback: true
  };
  const extras = {
    premiumFee: 10000,
  };
  const aBooking = createPremiumBooking(show, '2021/11/18', extras);
  aBooking.isPeakDay = true;
  expect(aBooking.hasTalkback).toBe(true);
})

test('PremiumBooking#basePrice', () => {
  const show = {
    price: 1000,
    talkback: true
  };
  const extras = {
    premiumFee: 10000,
  };
  const aBooking = createPremiumBooking(show, '2021/11/18', extras);
  aBooking.isPeakDay = true;
  expect(aBooking.basePrice).toBe(11150);
})
