/**
 * lab8.js
 */
"use strict";
// var add = (function () {
// var counter = 0;
// return function () {
//     return counter += 1;
// }
// })();
// console.log(add());

//Question 6
console.log("---Question 6 Solution-----");
const count = (function() {
    let counter = 0;
    const add = function() {
        counter += 1;
        return counter;
    }
    const reset = function() {
        counter = 0;
        return counter; 
    }
    return {
        add: add,
        reset: reset
    }
})();
console.log(count.add());
console.log(count.add());
console.log(count.add());
console.log(count.reset());


//Question 7
console.log("---Question 7 Solution-----");
console.log(` counter is free variable in question 6. 
 Free variable in context of closure : A variable referred to by a function that is not one of its 
 parameters or local variables.`);

//Question 8
console.log("---Question 8 Solution-----");
const make_count = (function() {
    let counter = 0;
    const add = function() {
        counter += 1;
        return counter;
    }
    const reset = function() {
        counter = 0;
        return counter;
    }
    const value = function() {
        return counter;
    }
    const make_adder = function (inc) {
        return function adder() {
            counter += inc;
        }
    }
    return {
        add: add,
        reset: reset,
        value:value,
        make_adder:make_adder
    }
})();
const add5 = make_count.make_adder(5);
add5();
add5();
add5();
console.log("after add 5 three times", make_count.value());
const add7 = make_count.make_adder(7);
add7();
add7();
add7();
console.log("after add 7 three times", make_count.value());

//Option2- Question8
console.log("---Question 8 Solution Option2-----");
const make_adder = function(inc) {
    let counter = 0;
    const add = function(){
        counter += inc;
        console.log(`Counter value is ${counter}`);
        return counter;
    }
    return add;
}
const add_5 = make_adder(5);
add_5();
add_5();
add_5();
const add_7 = make_adder(7);
add_7();
add_7();
add_7();

//Question 9
console.log("---Question 9 Solution-----");
console.log(`By making it as Module Pattern, one can remove all names from the Global namespace`);

//Question 10
console.log("---Question 10 Solution-----");
const Employee = (function() {
    let name = "";
    let age = 0;
    let salary = 0.0;
    const getName = function() {
        return name;
    }
    const getAge = function() {
        return age;
    }
    const getSalary = function() {
        return salary;
    }
    const setName = function(newName) {
        name = newName;
    }
    const setAge = function(newAge) {
        age=newAge;
    }
    const setSalary = function(newSalary) {
        salary=newSalary;
    }
    const increaseSalary = function(percentage) {
        let salary = getSalary();
        salary = (percentage/100)*salary + salary;
        setSalary(salary);
    }
    const incrementAge = function() {
        let age = getAge();
        age += 1;
        setAge(age);
    }
    const printEmployee = function () {
        console.log(`Name: ${getName()}; Age: ${getAge()}; Salary: ${getSalary()} `); 
    }
    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        incrementAge:incrementAge,
        increaseSalary:increaseSalary,
        printEmployee:printEmployee
    }
})();
Employee.setName("John Doe");
Employee.setAge(20);
Employee.setSalary(20000);
Employee.printEmployee();
Employee.incrementAge();
Employee.increaseSalary(10);
Employee.printEmployee();

//Question 11
console.log("---Question 11 Solution-----");
Employee.address = "";
Employee.getAddress = function() {
    return this.address;
}
Employee.setAddress = function(newAddress) {
    this.address = newAddress;
}
Employee.setAddress("1000N 4th Street, Fairfield Iowa");
console.log(`Address: ${Employee.getAddress()}`);

