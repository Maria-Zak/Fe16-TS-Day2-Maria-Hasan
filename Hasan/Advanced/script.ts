class Vehicle {
  image: string;
  model: string;
  yearproduction: number;
  fueltype: string;
  numberofseats: number;
  price: number;

  constructor(image: string, model: string, yearproduction: number, fueltype: string, numberofseats: number, price: number) {
    this.image = image;
    this.model = model;
    this.yearproduction = yearproduction;
    this.fueltype = fueltype;
    this.numberofseats = numberofseats;
    this.price = price;
    array.push(this);
  }

  displayInfo() {
    return `<div class = "col"><div class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title">Model: ${this.model}</h3>
    <h5 class="card-title">Production Year: ${this.yearproduction}</h5>
    <p class="card-text">Fueltype: ${this.fueltype}</p>
    <p class="card-text">Number of Seats: ${this.numberofseats}</p>
    <h4 class="card-title">List Price: ${this.price}</h4>
    <button class="btn btn-info btncal">current price</button>
    <h4 class="card-title currentprice">Current Price: <span class="result5">xx</span></h4>
    </div>
  </div>
</div>`;
  }

  calculate() {
    return this.price * 0.8;
  }
}

const array: Array<Vehicle> = [];
new Vehicle("images/audi_r8.jpg", "Audi R8", 2010, "benzin", 2, 78000);
new Vehicle("images/audi_rs4.jpg", "Audi RS4", 2008, "benzin", 4, 88000);
new Vehicle("images/audi_tt.jpg", "Audi TT", 2005, "benzin", 2, 45000);
new Vehicle("images/bmw_1.jpg", "BMW 330i", 2011, "benzin", 4, 55000);
new Vehicle("images/bmw_2.jpg", "BMW M3", 2011, "benzin", 2, 75000);
new Vehicle("images/vw_r32.jpg", "Golf R32", 2004, "benzin", 4, 39000);

for (let place of array) {
  (document.getElementById("info") as HTMLElement).innerHTML += place.displayInfo();
}
// for (let val of array) {
//   (document.getElementsByClassName("currentprice")[0] as HTMLElement).addEventListener("click", function() {

//   })
// }

let btns = document.getElementsByClassName("btncal");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    (document.getElementsByClassName("result5")[i] as HTMLElement).innerHTML = array[i].calculate();
  });
}
