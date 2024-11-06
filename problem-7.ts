// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge(): number {
    const runningYear = new Date().getFullYear();
    return runningYear - this.year;
  }
}

const car = new Car("Honda", "Civic", 2008);
const carAge = car.getCarAge();
console.log(carAge);
