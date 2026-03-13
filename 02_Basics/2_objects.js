// const tinderUser = new Object()     // this is a singleton object.
const tinderUser = {}        // this is a literal object

tinderUser.id = "123abc"
tinderUser.name = "jeel"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "jeel",
            lastName: "Ghetia"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}       // the same issue as array...it stores in array in array.
// const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2}


console.log(obj3);


