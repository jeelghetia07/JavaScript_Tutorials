const user = {
    username: "jeel",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"       // changed the context
// user.welcomeMessage()

// console.log(this);      // when we are in the node env...the this keyword refers to an empty string. 

// function chai(){
//     let username = "jeel"
//     console.log(this.username);  // this doesnt work inside the function for doing this.____
// }

// chai()


// const chai = function(){
//     let username = "jeel"
//     console.log(this.username);
// }

const chai = () => {
    let username = "jeel"
    console.log(this);
}

// chai()




const addtwo = (num1, num2) => {
    return num1+ num2
} 
 
console.log(addtwo(3,4));
