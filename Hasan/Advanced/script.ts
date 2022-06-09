
class Vehicle {
  model: string;
  yearproduction: number;
  fueltype: string;
  constructor(model: string, yearproduction: number, fueltype: string) {
    this.model = model;
    this.yearproduction = yearproduction;
    this.fueltype = fueltype;
  }
  displayInfo() {
    return `The Vehicle model ${this.model} whic is produced in ${this.yearproduction} , has a fueltype ${this.fueltype}`;
  }
}

// let person = new Vehicle("Hasan", 27, "engineer");
// (document.getElementById("result") as HTMLElement).innerHTML += person.displayInfo();

class Info extends Vehicle {
  price: number;
  numberofseats: number;
  constructor(model: string, yearproduction: number, fueltype: string, price: number, numberofseats: number) {
    super(model, yearproduction, fueltype);
    this.price = price;
    this.numberofseats = numberofseats;
  }
  displayInfo() {
    return `and I get ${this.price}€ every month, and I work in ${this.numberofseats}.`;
  }
}

// let person1 = new Info("Hasan", 27, "engineer", 3600, "Vienna");
// (document.getElementById("result") as HTMLElement).innerHTML += person1.displayInfo();
