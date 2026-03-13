const marvel_heros = ["thor" , "ironman", "spiderman"]
const dc = ["superman", "batman", "flash"]

// marvel_heros.push(dc)       // this pushes the entire array into the 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const all_heros = marvel_heros.concat(dc)   // this merges all arrays and returns a new array
// console.log(all_heros);


// const all_new_heros = [...marvel_heros, ...dc]       // best method to concatenate array
// console.log(all_new_heros);

const anotherArray = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]
const real_another_array = anotherArray.flat(Infinity) 
console.log(real_another_array);



console.log(Array.isArray("Jeel"));
console.log((Array.from("jeel")));
console.log(Array.from({name: "jeel"}));        // intresting imp for interview


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




