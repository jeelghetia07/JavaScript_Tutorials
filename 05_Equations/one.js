// for loop

// for (let i = 0; i < 10 ; i++) {
//     const element = i;
//     console.log(element);
// }

// let myarray = ["flash", "batman", "superman"]
// for(let i = 0 ; i < myarray.length ; i++){
//     const ele = myarray[i];
//     console.log(ele);
// }



// const greetings = "Hello World"
// for(const greet of greetings){
//     console.log(`each char is ${greet}`);
// }


// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India")      // it maintains the order but doesnt allow the same values again.

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {      // we cannot iterate in an object
//     console.log(key, ":-", value);
// }
