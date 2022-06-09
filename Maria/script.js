"use strict";
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    displayInfo() {
        return `Hello there, my name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}
class Info extends Person {
    constructor(name, age, jobTitle, salary, location) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.location = location;
    }
    displayInfo() {
        return `and I get ${this.salary}€ every month, and I work in ${this.location}.`;
    }
}
let person = new Person('Maria', 25, 'project manager');
document.getElementById('result').innerHTML += person.displayInfo();
let person1 = new Info('Maria', 25, 'project manager', 2000, 'Vienna');
document.getElementById('result').innerHTML += person1.displayInfo();
