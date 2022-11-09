"use strict";

// --- Question 1 ---
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
function max(x, y) {
    if (x > y) 
        return x;
    else
        return y;
}
console.log("1. Solution for max(3,7): " + max(3,7));
const sol1 = "1. Solution for max(3,7): " + max(3,7);
document.getElementById("sol1").innerHTML = sol1 ;


// --- Question 2 ---
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(x, y, z) {
   if (x > y  && x > z) return x;
   else if(y > z && y > x ) return y;
   else return z;
}
console.log("2. Solution for maxOfThree(3,17,9): " + maxOfThree(3,17,9));
const sol2 = "2. Solution for maxOfThree(3,17,9): " + maxOfThree(3,17,9);
document.getElementById("sol2").innerHTML = sol2 ;


// --- Question 3 ---
// Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(c) {
    c = c.toLowerCase();
    if (c == 'a' || c == 'e' ||c == 'i' ||c == 'o' ||c == 'u') 
        return true;
    else 
        return false;
 }
 console.log("3. Solution for isVowel('c'): " + isVowel('c'));
 console.log("3. Solution for isVowel('e'): " + isVowel('e'));
 const sol3_1 = "3. Solution for isVowel('c'): " + isVowel('c');
 const sol3_2 = "3. Solution for isVowel('e'): " + isVowel('e');
 document.getElementById("sol3_1").innerHTML = sol3_1 ;
 document.getElementById("sol3_2").innerHTML = sol3_2 ;


 // --- Question 4 ---
//  Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of 
// numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
function sum(array) {
    let sum = 0;
   for (let index = 0; index < array.length; index++) {
        sum += array[index];
   }
   return sum;
 }
 function multiply(array) {
    let multiply = 1;
    for (let index = 0; index < array.length; index++) {
        multiply *= array[index];
    }
    return multiply;
 }
 console.log("4. Solution for sum([1,2,3,4]): " + sum([1,2,3,4]));
 console.log("4. Solution for multiply([1,2,3,4]): " + multiply([1,2,3,4]));
 const sol4_1 = "4. Solution for sum([1,2,3,4]): " + sum([1,2,3,4]);
 const sol4_2 = "4. Solution for multiply([1,2,3,4]): " + multiply([1,2,3,4]);
 document.getElementById("sol4_1").innerHTML = sol4_1 ;
 document.getElementById("sol4_2").innerHTML = sol4_2 ;


// --- Question 5 ---
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(s) {
    let result = '';
    for (let index = s.length-1; index >=0; index--) {
        result += s[index];
    }
    return result;
}
console.log("5. Solution for reverse('jag testar'): " + reverse("jag testar"));
const sol5 = "5. Solution for reverse('jag testar'): " + reverse("jag testar");
document.getElementById("sol5").innerHTML = sol5 ;


// --- Question 6 ---
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(words) {
    let longest = 0;
    words.forEach(element => {
        if (element.length > longest) 
            longest = element.length;
    });
    return longest;
}
console.log("6. Solution for findLongestWord(['apple', 'banana', 'mango', 'pineapple']): " + findLongestWord(['apple', 'banana', 'mango', 'pineapple']));
const sol6 = "6. Solution for findLongestWord(['apple', 'banana', 'mango', 'pineapple']): " + findLongestWord(['apple', 'banana', 'mango', 'pineapple']);
document.getElementById("sol6").innerHTML = sol6 ;


// --- Question 7 ---
// Write a function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters.
function filterLongWords(words, i) {
    const filterWords = words.filter(element => element.length > i);
    return filterWords;
}
console.log("7. Solution for filterLongWords(['kiwi', 'apple', 'banana', 'mango', 'pineapple'], 5): " + filterLongWords(['kiwi', 'apple', 'banana', 'mango', 'pineapple'], 5));
const sol7 = "7. Solution for filterLongWords(['kiwi', 'apple', 'banana', 'mango', 'pineapple'], 5): " + filterLongWords(['kiwi', 'apple', 'banana', 'mango', 'pineapple'], 5);
document.getElementById("sol7").innerHTML = sol7 ;



// --- Question 8 ---
// Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and 
// returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) 
// should be computed as 1^2 + 2^2 +3^2 = 14. Note: Write your Javascript code without using Imperative programming. 
// i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.
  function computeSumOfSquares(numbers) {
    const sumOfSquare = numbers.map(n => n*n).reduce((accum, num)=> accum+num, 0);
    return sumOfSquare;
}
console.log("8. Solution for computeSumOfSquares([1,2,3]): " + computeSumOfSquares([1,2,3]));
const sol8 = "8. Solution for computeSumOfSquares([1,2,3]): " + computeSumOfSquares([1,2,3]);
document.getElementById("sol8").innerHTML = sol8 ;


// --- Question 9 ---
// Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and 
// prints only the numbers which are odd.
function printOddNumbersOnly(numbers) {
    console.log("9. Solution for printOddNumbersOnly([1,2,3,4,5,6,7,8,9]): " + numbers.filter(n => n % 2 != 0));
    const sol9 = "9. Solution for printOddNumbersOnly([1,2,3,4,5,6,7,8,9]): " + numbers.filter(n => n % 2 != 0);
    document.getElementById("sol9").innerHTML = sol9 ;
}
printOddNumbersOnly([1,2,3,4,5,6,7,8,9]);


// --- Question 10 ---
// Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers
//  and calculates and returns the sum of the squares of only the even numbers in the input array. E.g. 
//  computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 2^2 +4^2 = 20.
function computeSumOfSquaresOfEvensOnly(numbers) {
    return numbers.filter(n => n % 2 == 0).map(n=>n*n).reduce((accum, num)=> accum+num, 0);
}
console.log("10. Solution for computeSumOfSquaresOfEvensOnly([1,2,3,4,5,6]): " + computeSumOfSquaresOfEvensOnly([1,2,3,4,5,6]));
const sol10 = "10. Solution for computeSumOfSquaresOfEvensOnly([1,2,3,4,5,6]): " + computeSumOfSquaresOfEvensOnly([1,2,3,4,5,6]);
document.getElementById("sol10").innerHTML = sol10 ;



// --- Question 11 ---
// Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4
// above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use
// functional programming style/approach.
function sum11(numbers) {
    return numbers.reduce((accum, num)=> accum+num, 0);
}
function multiply11(numbers) {
    return numbers.reduce((accum, num)=> accum*num, 1);
}
console.log("11. Solution for sum11([1,2,3,4]): " + sum11([1,2,3,4]));
console.log("11. Solution for multiply11([1,2,3,4]): " + multiply11([1,2,3,4]));
const sol11_1 = "11. Solution for sum11([1,2,3,4]): " + sum11([1,2,3,4]);
const sol11_2 = "11. Solution for multiply11([1,2,3,4]): " + multiply11([1,2,3,4]);
document.getElementById("sol11_1").innerHTML = sol11_1 ;
document.getElementById("sol11_2").innerHTML = sol11_2 ;


// --- Question 12 ---
// Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers 
// and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should 
// return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)
function findSecondBiggest(numbers) {
    let max = numbers[0];
    numbers.forEach(n => {
        if(n > max) {
            max = n;
        }
    });
    let secondMax = 0;
    numbers.forEach(n => {
        if(n > secondMax && n !== max) {
            secondMax = n;
        }
    });
    return secondMax;
}
console.log("12. Solution for findSecondBiggest([1,2,3,4,5]): " + findSecondBiggest([1,2,3,4,5]));
console.log("12. Solution for findSecondBiggest([19,9,11,0,12]): " + findSecondBiggest([19,9,11,0,12]));
const sol12_1 = "12. Solution for findSecondBiggest([1,2,3,4,5]): " + findSecondBiggest([1,2,3,4,5]);
const sol12_2 = "12. Solution for findSecondBiggest([19,9,11,0,12]): " + findSecondBiggest([19,9,11,0,12]);
document.getElementById("sol12_1").innerHTML = sol12_1 ;
document.getElementById("sol12_2").innerHTML = sol12_2 ;


// --- Question 13 ---
// Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, 
// and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, 
// beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), 
// prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), 
// prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", 
// as output).
function printFibo(n, a, b) {
    let result = `13. printFibo(${n}, ${a}, ${b}): `;
    let fibo = '';
    let temp = 0;
    for(let i = 1; i <= n; i++) {
        if(i == n) fibo += a;
        else fibo += a + ',';
        temp = a+b;
        a = b;
        b = temp;
    }
    result += `${fibo}`;
    console.log(result);
    return result;
}
const sol13_1 = printFibo(1,0,1);
printInDom("sol13_1", sol13_1);
const sol13_2 = printFibo(2,0,1);
printInDom("sol13_2", sol13_2);
const sol13_3 = printFibo(3,0,1);
printInDom("sol13_3", sol13_3);
const sol13_4 = printFibo(6,0,1);
printInDom("sol13_4", sol13_4);
const sol13_5 = printFibo(10,0,1);
printInDom("sol13_5", sol13_5);

function printInDom(id, content) {
    document.getElementById(`${id}`).innerHTML = content ;
}