const Bird = require('./bird');

module.exports = class AfricanSwallow extends Bird {
  get plumage() {
    return 'high';
  }

  get airSpeedVelocity() {
    return 40;
  }
}
