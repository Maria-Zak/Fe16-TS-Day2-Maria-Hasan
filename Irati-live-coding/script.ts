interface Spot {
  description: string;
  city: string;
  address?: string;
  displayInfo: Function;
}

class Place implements Spot {
  city: string;
  description: string;
  img: string;
  constructor(city: string, description: string, img: string) {
    this.city = city;
    this.description = description;
    this.img = img;
    places.push(this);
  }
  displayInfo() {
    return `
        <div class = "col"><div class="card" style="width: 18rem;">
  <img src="${this.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.city}</h5>
    <p class="card-text">${this.description}</p>
    </div>
  </div>
</div>`;
  }
}

class Theater extends Place {
  name: string;
  phone: string;
  constructor(city: string, description: string, img: string, name: string, phone: string) {
    super(city, description, img);
    this.name = name;
    this.phone = phone;
  }
  displayInfo() {
    return `
        <div class = "col"><div class="card" style="width: 18rem;">
  <img src="${this.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.city}</h5>
    <h6 class="card-title">${this.name}</h6>
    <p class="card-text">${this.description}</p>
    <p class="card-text">${this.phone}</p>
    
    </div>
  </div>
</div>`;
  }
}
const places: Array<Place> = [];
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
for (let place of places) {
  (document.getElementById("info") as HTMLElement).innerHTML += place.displayInfo();
}
