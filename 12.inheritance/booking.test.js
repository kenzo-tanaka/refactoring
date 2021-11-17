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


describe('Booking#basePrice', () => {
  test('ピーク時の料金を算出', () => {
    const show = {
      price: 1000,
      talkback: true
    };
    const aBooking = createBooking(show, '2021/11/17');
    aBooking.isPeakDay = true;
    expect(aBooking.basePrice).toBe(1150);
  });
})

describe('Booking#hasTalkback', () => {
  test('ピークでなく、showにセットされているときtrueを返す', () => {
    const show = {
      price: 1000,
      talkback: true
    };
    const aBooking = createBooking(show, '2021/11/17');
    expect(aBooking.hasTalkback).toBe(true);
  })
  test('ピーク時はfalseを返す', () => {
    const show = {
      price: 1000,
      talkback: true
    };
    const aBooking = createBooking(show, '2021/11/17');
    aBooking.isPeakDay = true;
    expect(aBooking.hasTalkback).toBe(false);
  })
})

describe('PremiumBooking#hasTalkback(true)', () => {
  test('ピークであってもtrueを返す', () => {
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
})

describe('PremiumBooking#basePrice', () => {
  test('extraの料金も含めた金額を算出', () => {
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
})

