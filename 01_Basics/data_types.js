"use strict" // treates all JS code in this file as a newer version.

// alert(3+3) // this will show error becoz...its node.js not browser

// console.log(3+3)

// console.log("Jeel");

// let name = "jeel"
// let age = 18
// let isLoggedin = false
// let state;

/*
number => 2 to power 53
bigint
string => ""
boolean => true/false
null => standalone value
undefined =>
symbol : unique



object
*/

// console.log(typeof "hitesh");
// console.log(typeof age);
// console.log(typeof null);
// console.log(typeof undefined);


const outsideTemp = null        // this typeof null gives object 
const score = 100
const scoreValue = 100.3

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);      // will give false;



const heros = ["sipderman", "naagraj", "shaktiman", "dogeshbhai"];
let myObj = {       // this all under the braces are objects.
    name : "jeel",
    age : 18,
}

const myfunction = function(){
    console.log("Hello Jeel");   
}

console.log(typeof myfunction);     // this will give function type but its called object function
console.log(typeof heros);     // this will give object type....all nonprimitive DT give objects as their types
