

class Car {

    constructor(brand, model, color, year, speed, fuelCapacity, probeq, fuelFor1Km, currentFuel) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.fuelCapacity = fuelCapacity;
        this.probeq = probeq;
        this.fuelFor1Km = fuelFor1Km;
        this.currentFuel = currentFuel;

    }

    Showinfo() {
        return `brand: ${this.brand} \n model: ${this.model} \n color: ${this.color} \n year: ${this.year} \n speed: ${this.speed} \n fuelcapacity: ${this.fuelCapacity} \n probeq: ${this.probeq} \n fuelFor1Km: ${this.fuelFor1Km} \n currentFuel ${this.currentFuel} `
    }

    AddFuel(fuel) {
        const totalfuel = parseInt(this.currentFuel) + parseInt(fuel)
        if (totalfuel > parseInt(this.fuelCapacity)) {
            console.log("Cende yeteri qeder yer yoxdur");
        }
        else {
            console.log("Yanacaq ugurla elave olundu");
        }
    }

    Drive(distance) {
        const distancefuel = (parseInt(this.fuelFor1Km)) * (parseInt(distance))
        if ((parseInt(this.currentFuel) - (distancefuel)) > 0) {
            console.log("Yanacaq bes edir");
        }
        else {
            console.log("Bes etmir");
        }

    }



}

const newcar = new Car("Bmw", "328i", "White", "2018", "300", "50", "80000", "0.1", "20")

console.log(newcar.Showinfo());

console.log(newcar.AddFuel(40));
console.log(newcar.Drive(1000));



