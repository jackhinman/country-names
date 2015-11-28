var expect = require('chai').expect;
var countryNames = require('./index.js');

describe('country-names', function() {
    describe('all', function() {
        it('should be an array of strings', function() {
            expect(countryNames.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain `United States`', function() {
            expect(countryNames.all).to.include('United States');
        });
    });

    describe('random', function() {
        it('should return a string', function() {
            expect(countryNames.random()).to.satisfy(isMyString);

            function isMyString(randomVal) {
                var randomVal = randomVal;
                return typeof randomVal === 'string';
            }
        });
    });
});
