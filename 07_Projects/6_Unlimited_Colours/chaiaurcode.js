// generate a random colour

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'

    for(let i = 0 ; i < 6 ; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId = null;

const startChangingColor = function(){
    function changeBGcolor(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalId)
        intervalId = setInterval(changeBGcolor, 1000);
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;      // clears the value of intervalId.
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)