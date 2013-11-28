var assert = require('assert');
var GeoHasher = require('../');

describe('geohasher', function () {
  it('encode', function () {
    assert.equal(GeoHasher.encode(37.8324, 112.5584), 'ww8p1r4t8yd0', 'should be equal ww8p1r4t8yd0');
    assert.equal(GeoHasher.encode(37.8324, 112.5584, 9), 'ww8p1r4t8', 'should be equal ww8p1r4t8');
    assert.equal(GeoHasher.encode(-25.382708, -49.265506), '6gkzwgjzn820', 'should be equal 6gkzwgjzn820');
    assert.equal(GeoHasher.encode(57.64911, 10.40744), 'u4pruydqqvj8', 'should be equal u4pruydqqvj8');
  });

  it('decode', function () {
    var result1 = GeoHasher.decode('ww8p1r4t8yd0');
    assert.equal(result1.latitude[0].toFixed(4), 37.8324, 'should be equal 37.8324');
    assert.equal(result1.longitude[0].toFixed(4), 112.5584, 'should be equal 112.5584');
  });
});
