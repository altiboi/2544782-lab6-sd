const cars = require('../cars.json');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function getting the whips...');

    context.res = {
        body: cars
    };
}