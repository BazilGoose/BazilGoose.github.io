console.log("Script running...");

const car = {
    make: "Volkswagen",
    model: "Jetta",
    year: 2024,
};

// How do we express the object above as a class?
class Vehicle {
    constructor(makeArg, modelArg, yearArg){
        this.make = makeArg;
        this.model = modelArg;
        this.year = yearArg;
    };
    displayInfo(){
        return `This car is of make ${this.make} and of model ${this.model} and of year ${this.year}`;
    };
    static startEngine() {
        return "Engine started!";
    };
};

const car2 = new Vehicle("Volkswagen", "Jetta", 2024);
const car3 = new Vehicle("Mustang", "GT", 2024);

console.log(car);
console.log(car2);
console.log(car3.displayInfo());
console.log(Vehicle.startEngine());

class ElectricCar extends Vehicle {
    constructor(make, model, year, batteryLife) {
        super(make, model, year); // Call the parent constructor
        this.batteryLife = batteryLife;
    };
    chargeBattery(){
        if (this.batteryLife < 100){
            this.batteryLife += 10;
            if (this.batteryLife > 100){
                this.batteryLife = 100;
            };
            return `Battery charged: ${this.batteryLife} %`;
        } else {
            return "Battery is full!";
        };
    };
    displayBattery(){
        return `Battery life remaining: ${this.batteryLife} %`;
    };
};

const tesla = new ElectricCar("Tesla", "Roadster", 2024, 59);
console.log(tesla.displayBattery());
console.log(tesla.chargeBattery());
console.log(tesla.chargeBattery());
console.log(tesla.chargeBattery());
console.log(tesla.chargeBattery());
console.log(tesla.chargeBattery());
console.log(tesla.chargeBattery());
console.log(tesla.displayBattery());
console.log(tesla);