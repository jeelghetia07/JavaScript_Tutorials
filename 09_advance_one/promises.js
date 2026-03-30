const promise_1 = new Promise(function(resolve, reject){
    // Do an async tasks
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete.');
        resolve()
    }, 1000);
})

promise_1.then(function (){
    console.log("Promise Consumed.");
})


new Promise(function(resolve, reject){      // this is not stored in a variable so we directly use .then() here only.
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved.");
});



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "jeel", password: "123"})
        }
        else{
            reject('Error : something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})



const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "jacascript", password: "123"})
        }
        else{
            reject('Error : JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await PromiseFive
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch(error){
//         console.log("E : ", error);
//     }
// }

// getAllUsers()



fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));