const name = "jeel"
const repoCount = 50

// console.log(name + repoCount + " Value");    // this is not good for programming

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('jeel-Ghet-ia')   // this uses the object method.

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());    // this doesnt change the original string....it just makes a copy in the stack.


// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('h'));


// const newString = gameName.substring(0,4)
// console.log(newString);

// the good part is that....we can pass -ve values also.
const anotherString = gameName.slice(-10,4)     // actual_index = length + neg_index....(act = 11 - 10 = 1..so (1,4))
console.log((anotherString));

const newStringOne = "      jeel        "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://jeel.com/jeel%09ghetia"
console.log(url.replace('%09', '-'));
console.log(url.includes('hello'));



console.log(gameName.split('-'));
