var ura = require('unique-random-array');
var countryNames = require('./country-names.json');

module.exports = {
    all: countryNames,
    random: ura(countryNames)
};
