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
    /*
        the code below this was supposed to be for efficiently removing the event listener from the close button if the drawer was closed, as it wouldn't need to be listening for a close action. I couldn't quite get it to work, so I'll come back to it later. 
    */
    // // if drawer doesn't have 'active' class, add active class and add event listener for close button 
    // if (!sideDrawer.classList.contains('active')){
    //     closeButton.addEventListener('click', () => {
    //         toggleMenuOpen(); 
    //     })
    //     console.log('does not contain active');
    //     // else remove active class and remove listener from close button 
    // }else{
    //     removeEventListenerFromCloseButton()
    // }
    sideDrawer.classList.toggle('active'); 
}

closeButton.addEventListener('click', toggleMenuOpen)

// define function to remove event listener from closeButton 
const removeEventListenerFromCloseButton = () => {
    closeButton.removeEventListener('click', toggleMenuOpen)
}


toggler.addEventListener('click', () => {
    toggleMenuOpen()
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
        if (!sideDrawer.classList.contains('active')){
            sideDrawer.classList.add('active')
        }
    }
    if (x2 - x1 < 20 && x1 < 200){
        if (sideDrawer.classList.contains('active')){
            sideDrawer.classList.remove('active')
        }
    }
})


