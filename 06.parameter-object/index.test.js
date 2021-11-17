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
  expect(readingOutsideRange(station, 46, 59, null)).toEqual([]);
})

test('範囲内のものを返す', () => {
  expect(readingOutsideRange(station, 48, 59, null)).toEqual([{ temp: 47, time: '2021/11/10' }]);
})
