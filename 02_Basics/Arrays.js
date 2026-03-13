        // Arrays

const myArray = [0,1,2,3,4,5]
const myHeros = ["batman", "spiderman"]

// const myArr2 = new Array(1,2,3,4)

console.log(myHeros);

            // Array methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop();
// console.log(myArray);

// myArray.unshift(9)  // adds at the front of the array.
// myArray.shift();    // removes the first ele.

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));    /// if not existing ...will give -1.

const newArr = myArray.join()

// console.log(myArray);
// console.log(typeof newArr);     // this will convert the type to string.


console.log("A ", myArray);


const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3)

console.log("c ", myArray);
console.log(myn2);


