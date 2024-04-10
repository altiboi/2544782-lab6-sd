const cars = require("../cars.json");

module.exports = async function addCar(context, req) {
  try {
    context.log('JavaScript HTTP trigger function adding the whip...');

    const newCar = req.body;
    cars.push(newCar);
    context.res = {
      body: newCar,
    };
  } catch (error) {
    context.res = {
      body: { message: "There has been an error adding car", error },
    };
  }
};