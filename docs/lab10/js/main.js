/**
 * main.js
 */
// "use strict";
import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js";
(function(){
    const persons = [
        new Person("Anna Smith", "1998-12-15"),
        new Person("Bob Jones", "1945-11-16"),
        new Person("Carlos Slim Helu", "1976-09-24"),
    ];
    persons.forEach(a => console.log(a.toString()));
    
    const employee = new Employee("Jim Hanson", null,"245,990.00",null);
    employee.doJob("Software Engineer");
    
        
})();

   

