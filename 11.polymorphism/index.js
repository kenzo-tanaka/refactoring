const Bird = require('./bird');
const AfricanSwallow = require('./africanSwallow');
const EuropeanSwallow = require('./europeanSwallow');

exports.plumages = function plumages(birds) {
  return new Map(birds.map(b => [b.name, plumage(b)]));
}

exports.speeds = function speeds(birds) {
  return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return new EuropeanSwallow(bird);
    case 'AfricanSwallow':
      return new AfricanSwallow(bird);
    default:
      return new Bird(bird);
  }
}
