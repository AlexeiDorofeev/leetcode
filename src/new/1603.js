class ParkingSystem {
  constructor(big, medium, small) {
    this.slots = {
      1: big,
      2: medium,
      3: small,
    };
  }

  addCar(carType) {
    if (this.slots[carType] === 0) {
      return false;
    }

    this.slots[carType]--;
    return true;
  }
}

const parkingSystem = new ParkingSystem(1, 1, 0);
console.log(parkingSystem.addCar(1));
console.log(parkingSystem.addCar(2));
console.log(parkingSystem.addCar(3));
console.log(parkingSystem.addCar(1));
