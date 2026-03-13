// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "jeel",
    age: 18,
    [mySym]: "mykey1",
    location: "Rajkot",
    email: "Jeel@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);   // simple JsUser 
console.log(JsUser[mySym]);


JsUser.email = "hitesh@chatpgt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name }`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

