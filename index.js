// find sideDrawer div 
let sideDrawer = document.getElementById('sideDrawer'); 
let toggler = document.getElementById('toggler')
let closeButton = document.getElementById('closeMenuButton')

// create keyframes inside an array 
let slideInFrames = [
    {
        background: 'black',
        // left: '-200px'
        transform: 'translateX(-200px)'

    },
    {
        background: 'blue',
        // offset: 0.2
    },
    {
        background: 'red',
        // left: '0'
        transform: 'translateX(0px)'

    }
]

let slideOutFrames = [
    {
        background: 'black',
        transform: 'translateX(0px)'
    },
    {
        background: 'blue',
        // offset: 0.2
    },
    {
        background: 'red',
        // left: '-200px'
        transform: 'translateX(-200px)'
    }
]

// create object denoting option values 
let timeIn = {
    duration: 500,
    easing: 'ease-out',
    // iterations: Infinity
}


const slideMenuIn = () => {
    // apply animation to sideDrawer div 
    return sideDrawer.animate(slideInFrames, {
        duration: 500,
        easing: 'ease-out',
        iterations: 1
    })
}

const slideMenuOut = () => {
    // apply animation to sideDrawer div 
    return sideDrawer.animate(slideOutFrames, {duration:200})    
}
// add 'active' class to drawer to open and close it
const toggleMenuOpen = () => {
    sideDrawer.classList.toggle('non-active'); 
    sideDrawer.classList.toggle('active'); 
}

toggler.addEventListener('click', () => {
    toggleMenuOpen()
})

closeButton.addEventListener('click', () => {
    toggleMenuOpen(); 
})

let x1, y1; 
document.addEventListener('touchstart', (event) => {
    console.log('touch moved');
    let touchLocation = event.targetTouches[0]
    console.log(touchLocation.pageX);
    console.log(touchLocation.pageY);
    x1 = touchLocation.clientX;
    y1 = touchLocation.clientY;
})

document.addEventListener('touchend', event =>{
    let x2 = event.changedTouches[0].clientX; 
    let y2 = event.changedTouches[0].clientY; 
    // console.log (x1 - x2); 
    if (x2 - x1 > 20 && x1 < 20){
        sideDrawer.classList.toggle('active')
    }
})


