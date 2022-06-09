"use strict";
// Basic 1:
// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
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
let person = new Person("Hasan", 27, "engineer");
document.getElementById("result").innerHTML += person.displayInfo();
// Basic 2
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
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
let person1 = new Info("Hasan", 27, "engineer", 3600, "Vienna");
document.getElementById("result").innerHTML += person1.displayInfo();
