let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());     // Fri Mar 13 2026 00:38:24 GMT+0530 (India Standard Time)
// console.log(mydate.toLocaleString());   // 3/13/2026, 12:38:24 AM
// console.log(typeof mydate);     // object type


// let mycreatedDate = new Date(2026,0,13)     // year, month-ind, day
let mycreatedDate = new Date("01-14-2026")    
// console.log(mycreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));   // in seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long",
})
