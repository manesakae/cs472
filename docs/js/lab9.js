/** 
 * lab9.js
 */
"use strict";
//Question 1
console.log("--------Question 1 Solution---------");
const person = {
    name: "",
    dateOfBirth: "",
    getName: function() {
        return this.name;
    },
    setName: function(name) {
        this.name = name;
    }
}
let john = Object.create(person);
john.setName("John");
console.log(`The person's name is ${john.getName()}`);
john.dateOfBirth = new Date("December 10, 1998");
console.log(`${john.getName()} was born on ${john.dateOfBirth.getFullYear()}-${john.dateOfBirth.getMonth()+1}-${john.dateOfBirth.getDate()}`);


//Question 2
console.log("--------Question 2 Solution---------");
let employee = Object.create(person);
employee.salary = 0;
employee.hireDate = Date.now();
employee.doJob = function(jobTitle) {
    console.log(`${this.getName()} is a ${jobTitle} who earns ${this.salary}`);
}

let Anna = Object.create(employee);
Anna.setName("Anna");
Anna.salary = "$249.995.50";
Anna.doJob("Programmer");

//Question 3
console.log("--------Question 3 Solution---------");
function Person(name, dateOfBirth){
    this.name = name;
    this.dateOfBirth = new Date(dateOfBirth);
    this.getName = function() {
        return this.name;
    }
    this.setName = function(name) {
        this.name = name;
    }
}
Person.prototype.toString = function(){
    return `{Name: ${this.getName()}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}}`;
}
const Peter = new Person("Peter", "November 10, 1985");
console.log(Peter.toString());