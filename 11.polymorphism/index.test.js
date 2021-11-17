const Bird = require('./bird');

function plumages(birds) {
  return new Map(birds.map(b => [b.name, plumage(b)]));
}

function speeds(birds) {
  return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  return new Bird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return new Bird(bird).airSpeedVelocity;
}

// test
const birds = [
  {
    name: 'Foo',
    type: 'EuropeanSwallow'
  },
  {
    name: 'Bar',
    type: 'AfricanSwallow'
  }
];

test('plumages', () => {
  expect(plumages(birds).size).toBe(2)
  expect(plumages(birds).get('Foo')).toBe('average')
  expect(plumages(birds).get('Bar')).toBe('high')
})


test('speeds', () => {
  expect(speeds(birds).size).toBe(2)
  expect(speeds(birds).get('Foo')).toBe(35)
  expect(speeds(birds).get('Bar')).toBe(40)
})
