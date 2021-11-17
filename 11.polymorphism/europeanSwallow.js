const Bird = require('./bird');

module.exports = class EuropeanSwallow extends Bird {
  get plumage() {
    return 'average';
  }

  get airSpeedVelocity() {
    return 35;
  }
}
