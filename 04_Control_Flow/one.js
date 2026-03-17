// if statement

// const isUserLoggedIn = true;

// if(2 == "2"){       // here if  i use the == it checks the value only....if === it checks the type also...
//     console.log("yes");
// }
// else console.log("no");


// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

const isUserLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEMail= true;

if(isUserLoggedIn && debitCard){
    console.log("Allow to purchase course.");
}

if(LoggedInFromGoogle || LoggedInFromEMail){
    console.log("User logged in");
}