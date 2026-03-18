const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)        // if i dont do parseInt....it will always return a string...so we have to convert it into an integer
    const weight = parseInt(document.querySelector('#weight').value)        // we can also use Number(.....) this is better 
    const results = document.querySelector('#results')      // let this be 
    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // now display the results
        results.innerHTML = `<span>${bmi}</span>`;
    }
});