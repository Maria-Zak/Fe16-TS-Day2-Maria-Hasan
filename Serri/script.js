"use strict";
class Student {
    constructor(name, age, pic) {
        this.name = name;
        this.age = age;
        this.img = pic;
        console.log(this);
        array.push(this);
    }
    printInfo() {
        return `<div class="d-flex">
  <div class="flex-shrink-0">
    <img src="${this.img}" alt="...">
  </div>
  <div class="flex-grow-1 ms-3">
    ${this.name} ${this.age}
  </div>
</div>`;
    }
}
class Teacher extends Student {
    //   public salary?: number;
    constructor(name, age, pic, salary = 500) {
        super(name, age, pic);
        this.salary = salary;
    }
    howMuchHeEarn() {
        return this.age * this.salary;
    }
    printInfo() {
        return `<div class="d-flex">
  <div class="flex-shrink-0">
    <img src="${this.img}" alt="...">
  </div>
  <div class="flex-grow-1 ms-3">
    ${this.name} ${this.age} and got ${this.salary}
    <button class="btn btn-info">Calculate price</button>
  </div>
</div>`;
    }
}
let array = [];
new Student("John", 30, "https://cdn.pixabay.com/photo/2021/09/07/18/10/cat-6604565__340.jpg");
new Student("Mary", 20, "https://cdn.pixabay.com/photo/2021/09/07/18/10/cat-6604565__340.jpg");
new Student("Serri", 18, "https://cdn.pixabay.com/photo/2021/09/07/18/10/cat-6604565__340.jpg");
new Teacher("Doe", 30, "https://cdn.pixabay.com/photo/2021/09/07/18/10/cat-6604565__340.jpg");
console.log(array);
// (document.getElementsByClassName("result")[0] as HTMLElement).innerHTML = student1.printInfo();
// (document.getElementsByClassName("result")[0] as HTMLElement).innerHTML += student2.printInfo();
// (document.getElementsByClassName("result")[0] as HTMLElement).innerHTML += student3.printInfo();
// let array: Array<Student> = [student1, student2, student3];
for (let val of array) {
    document.getElementsByClassName("result")[0].innerHTML += val.printInfo();
}
