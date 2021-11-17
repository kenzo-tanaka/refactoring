const Bird = require('./bird');

exports.plumages = function plumages(birds) {
  return new Map(birds.map(b => [b.name, plumage(b)]));
}

exports.speeds = function speeds(birds) {
  return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  return new Bird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return new Bird(bird).airSpeedVelocity;
}
