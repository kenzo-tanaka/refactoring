exports.readingOutsideRange = function readingOutsideRange(station, range) {
  return station.readings
    .filter(r => !range.contains(r.temp));
}
