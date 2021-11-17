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

describe('readingOutsideRange', () => {

  describe('全て範囲外', () => {
    test('空の配列を返す', () => {
      const range = new NumberRange(46, 59);
      expect(readingOutsideRange(station, range)).toEqual([]);
    })
  })

  describe('一部範囲外', () => {
    test('範囲内のオブジェクトを返す', () => {
      const range = new NumberRange(48, 59);
      expect(readingOutsideRange(station, range)).toEqual([{ temp: 47, time: '2021/11/10' }]);
    })
  })

})

