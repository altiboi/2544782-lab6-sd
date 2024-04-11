// removeCar.js

const cars = require("../cars.json");

module.exports = async function removeCar(context, req) {
  try {
    context.log('JavaScript HTTP trigger function removing the car...');

    const carId = req.params.carId;
    const index = cars.findIndex(car => car.id === carId);
    if (index === -1) {
      context.res = {
        status: 404,
        body: { message: 'Car not found' }
      };
    } else {
      cars.splice(index, 1);
      context.res = {
        body: { message: `Car with id ${carId} removed` }
      };
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: { message: "There has been an error removing car", error }
    };
  }
};
