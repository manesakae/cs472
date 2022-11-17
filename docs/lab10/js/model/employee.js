/**
 * employee.js
*/
"use strict";
import { Person } from "./person.js";
export class Employee extends Person {
    constructor(name, dateOfBirth, salary, hireDate){
        super(name, dateOfBirth);
        this.salary = salary;
        this.hireDate = new Date(hireDate);
    }
    doJob(jobTitle){
        console.log(`${this.name} is a ${jobTitle} who earns $${this.salary}`);
    }
}