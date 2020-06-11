// find test div 
let test = document.getElementById('test'); 
console.log(test); 

// create keyframes inside an array 

let kf = [
    {
        background: 'black',
        // left: '-20px'
    },
    {
        background: 'blue',
        // offset: 0.2
    },
    {
        background: 'red',
        left: '10px'
    }
]

// create object denoting time values 
let time = {
    duration: 1000,
    // iterations: Infinity
}

// apply animation to test div 
test.animate(kf, time)