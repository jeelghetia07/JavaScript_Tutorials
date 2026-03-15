// immediatly invoked function expression(IIFE)

(function chai(){      // the first parenthesis are for function defination and second are for the calling
    console.log(`DB CONNECTED`);
})();      // the semicolon is for stopping the IIFE function and says that now thisone is over go ahead

((name) => {
    console.log(`DB CONNECTED TWO by ${name}`);
})('jeel')