function sayMyname(){
    console.log("j");
    console.log("e");
    console.log("e");
    console.log("l");
}

// sayMyname()

// function add2num(n1, n2){
//     console.log(n1+n2);
//     return n1+n2
// }

// const res = add2num(3,6);
// console.log("Result : ", res);


// function LoginUserMessage(username = "user"){   // this is the default value as a parameter....if i dont pass anything i get this.
//     if(username === undefined){
//         console.log("please enter a valid username.");
//         return
//     }
//     return `${username} just logged in.`
// }

// const ans = LoginUserMessage("jeel")
// const ans = LoginUserMessage()
// console.log(ans);


function calcCartPrice(val1, val2, ...num1){        // this ... is called a rest / spread operator
    return num1
}

// console.log(calcCartPrice(200, 300, 400));

const user = {
    username: "jeel",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const mynewArray = [200, 400, 100, 600]

function returnsecondValue(getArray){
    return getArray[1]
}

console.log(returnsecondValue(mynewArray));

