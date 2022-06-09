class Vehicle {
  model: string;
  yearproduction: number;
  fueltype: string;
  numberofseats: number;
  price: number;
  image: string;
  constructor(model: string, yearproduction: number, fueltype: string, price: number, numberofseats: number, image: string) {
    this.model = model;
    this.yearproduction = yearproduction;
    this.fueltype = fueltype;
    this.numberofseats = numberofseats;
    this.price = price;
    this.image = image;
  }
  displayInfo() {
    return `<div class = "col"><div class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title">Model: ${this.model}</h3>
    <h5 class="card-title">Productionyear${this.yearproduction}</h5>
    <p class="card-text">Fueltype: ${this.fueltype}</p>
    <p class="card-text">Number of Seats: ${this.numberofseats}</p>
    <h4 class="card-title">Productionyear${this.price}</h4>
    </div>
  </div>
</div>`;
  }
}

const cars: Array<Vehicle> = [];
new Place("Hamburg", "It is a nice city", "hamburg.png");
new Place("Nantes", "It is also nice", "nantes.jpeg");
new Place("Stockholm", "It is a nice city", "stockholm.jpeg");
new Place("Vitoria-Gasteiz", "It is also nice", "vitoria.jpg");
new Theater(
  "Sydney",
  "Landmark, skyline-dominating arts centre for opera, theatre, music and dance, plus guided tours.",
  "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_1280.jpg",
  "Sydney Opera House",
  "+61292507111"
);
new Theater(
  "Buenos Aires",
  "This grand theater (circa 1908) known for acoustics hosts classical music, operas, ballets & tours.",
  "https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg",
  "Teatro Colón",
  "+541143787100"
);
for (let place of cars) {
  (document.getElementById("info") as HTMLElement).innerHTML += place.displayInfo();
}
