module.exports = class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    switch (this.type) {
      case 'EuropeanSwallow':
        return 'average';
      case 'AfricanSwallow':
        return 'high';
      default:
        return null;
    }
  }

  get airSpeedVelocity() {
    switch (this.type) {
      case 'EuropeanSwallow':
        return 35;
      case 'AfricanSwallow':
        return 40;
      default:
        return null;
    }
  }
}
