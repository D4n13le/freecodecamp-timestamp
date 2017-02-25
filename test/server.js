var expect = require('chai').expect;
var request = require('request');
var server = require('../app/server');

var serverInstance;

var baseUrl = `http://${process.env.IP}:${process.env.PORT}/`;

describe("HTTP Server", function() {
  var couples = [
    { unix: 0,             natural: 'January 1, 1970'},
    { unix: 4924800,       natural: 'February 27, 1970'},
    { unix: 99964800,      natural: 'March 3, 1973'},
    { unix: 9999936000,    natural: 'November 20, 2286'},
  ];

  before(function() {
    serverInstance = server.listen(process.env.PORT, process.env.IP);
  });

  after(function() {
    serverInstance.close();
  });

  describe("Unix to natural readable conversion", function() {

    it('returns status 200', function(done) {
      var url = baseUrl + '0';
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    couples.forEach(function(couple) {
      it(`converts ${couple.unix}`, function(done) {
        var url = baseUrl + couple.unix;

        request(url, function(error, response, body) {
          var result = JSON.parse(body);

          expect(result.unix).to.equal(couple.unix);
          expect(result.natural).to.equal(couple.natural);

          done();
        });
      });
    });

    // it('returns null for invalid unixs', function() {
    //   var resultHello = converter.unixToNatural('hello');
    //   var resultNatural = converter.unixToNatural('January 1, 1970');

    //   expect(resultHello).to.be.null;
    //   expect(resultNatural).to.be.null;
    // });
  });

  describe("Natural readable to unix conversion", function() {
    it('returns status 200', function(done) {
      var url = baseUrl + '0';
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    // couples.forEach(function(couple) {
    //   it(`converts ${couple.natural}`, function() {
    //     var result = converter.naturalToUnix(couple.natural);
    //     expect(result).to.equal(couple.unix);
    //   });
    // });

    // it('returns null for invalid natural dates', function() {
    //   var resultHello = converter.naturalToUnix('hello');
    //   var resultUnix = converter.naturalToUnix(4924800);

    //   expect(resultHello).to.be.null;
    //   expect(resultUnix).to.be.null;
    // });
  });
});