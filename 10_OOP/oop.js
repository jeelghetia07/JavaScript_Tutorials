const user = {
    username: "jeel",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from DB");
        // console.log(`Username: ${this.username}`);       // this helps in taking the variable from outside, without this.username, its said invalid.
        // console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);      // in the global context there is nothing currently.


