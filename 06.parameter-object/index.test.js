const NumberRange = require('./numberRange');
const { readingOutsideRange } = require('./index');

const station = {
  name: 'ZBI',
  readings: [
    { temp: 47, time: '2021/11/10' },
    { temp: 53, time: '2021/11/11' },
    { temp: 58, time: '2021/11/12' },
    { temp: 53, time: '2021/11/13' },
  ]
};

// TODO:context
test('全て範囲外で空の配列を返す', () => {
  const range = new NumberRange(46, 59);
  expect(readingOutsideRange(station, range)).toEqual([]);
})

test('範囲内のものを返す', () => {
  const range = new NumberRange(48, 59);
  expect(readingOutsideRange(station, range)).toEqual([{ temp: 47, time: '2021/11/10' }]);
})
