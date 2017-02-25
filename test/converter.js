var expect = require('chai').expect;
var converter = require('../app/converter');

describe("Unix converter", function() {
  var couples = [
    { unix: 0,             natural: 'January 1, 1970'},
    { unix: 4924800,       natural: 'February 27, 1970'},
    { unix: 99964800,      natural: 'March 3, 1973'},
    { unix: 9999936000,    natural: 'November 20, 2286'},
  ];

  describe("Unix to natural readable conversion", function() {
    couples.forEach(function(couple) {
      it(`converts ${couple.unix}`, function() {
        var result = converter.unixToNatural(couple.unix);
        expect(result).to.equal(couple.natural);
      });
    });

    it('returns null for invalid unixs', function() {
      var resultHello = converter.unixToNatural('hello');
      var resultNatural = converter.unixToNatural('January 1, 1970');

      expect(resultHello).to.be.null;
      expect(resultNatural).to.be.null;
    });
  });

  describe("Natural readable to unix conversion", function() {
    couples.forEach(function(couple) {
      it(`converts ${couple.natural}`, function() {
        var result = converter.naturalToUnix(couple.natural);
        expect(result).to.equal(couple.unix);
      });
    });

    it('returns null for invalid natural dates', function() {
      var resultHello = converter.naturalToUnix('hello');
      var resultUnix = converter.naturalToUnix(4924800);
      var resultJebr = converter.naturalToUnix('Jebryary 11, 3009');

      expect(resultHello).to.be.null;
      expect(resultUnix).to.be.null;
      expect(resultJebr).to.be.null;
    });
  });

  describe("Without specifying the type", function() {
    couples.forEach(function(couple) {
      it(`converts ${couple.unix}`, function() {
        var result = converter.convert(couple.unix);
        expect(result.unix).to.equal(couple.unix);
        expect(result.natural).to.equal(couple.natural);
      });

      it(`converts ${couple.natural}`, function() {
        var result = converter.convert(couple.natural);
        expect(result.unix).to.equal(couple.unix);
        expect(result.natural).to.equal(couple.natural);
      });
    });

    it('returns null for invalid natural dates', function() {
      var resultHello = converter.convert('hello');
      var resultJebr = converter.convert('Jebryary 11, 3009');

      expect(resultHello.unix).to.be.null;
      expect(resultHello.natural).to.be.null;
      expect(resultJebr.unix).to.be.null;
      expect(resultJebr.natural).to.be.null;
    });
  });
});