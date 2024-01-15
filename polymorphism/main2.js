// Polimorfismo
class Vehicle {
  run() {
    console.log(`My vehicle is very fast`);
  }
}
class Bike extends Vehicle {
  run() {
    console.log(`My bike is very fast`);
  }
}
class Motorcycle extends Vehicle {
  run(speed) {
    console.log(`My bike is very fast ${speed}km/h `);
  }
}
class Car extends Vehicle {
  run(speed) {
    console.log(`My car uis very fast ${speed}km/h`);
  }
}

const vehicle = new Vehicle();
const bike = new Bike();
const moto = new Motorcycle();
const car = new Car();
vehicle.run();
bike.run();
moto.run(100);
car.run(150);
