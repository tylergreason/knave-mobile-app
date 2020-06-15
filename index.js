const drawerWidth = 200; 

const swipeAreaLeft = 0, minimumSwipeDistance = 60, swipeAreaRight = swipeAreaLeft + minimumSwipeDistance; 
// set css drawer width to that which is set above 
document.documentElement.style.setProperty(`--drawerWidth`, `${drawerWidth}px`);


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
    sideDrawer.classList.toggle('active'); 
}

closeButton.addEventListener('click', toggleMenuOpen)

// define function to remove event listener from closeButton 
const removeEventListenerFromCloseButton = () => {
    closeButton.removeEventListener('click', toggleMenuOpen)
}


toggler.addEventListener('click', toggleMenuOpen)


let x1, y1; 
document.addEventListener('touchstart', (event) => {
    // debugger
    // console.log('touch moved');
    let touchLocation = event.targetTouches[0]
    // console.log(touchLocation.pageX);
    // console.log(touchLocation.pageY);
    console.log(touchLocation.clientX - event.changedTouches[0].clientX);
    

    x1 = touchLocation.clientX;
    y1 = touchLocation.clientY;
    // debugger

})

document.addEventListener('touchend', event => {
    let x2 = event.changedTouches[0].clientX; 
    let y2 = event.changedTouches[0].clientY; 
    let xDiff = Math.abs(x1 - x2); 
    let yDiff = Math.abs(y1 - y2); 

    // if the minimum distance swiped is (whatever the const set at the top of this page says) and the swipe started inside the swipe area (again, see the top of the page for those consts)
    console.log(`${x1} ${x2}`)
    // debugger
    // if swiping right 
    if (x2 - x1 > minimumSwipeDistance && x1 < swipeAreaRight){
        if (!sideDrawer.classList.contains('active')){
            sideDrawer.classList.add('active')
        }
    }
    // if swiping left 
    else if ((x1 - x2 > minimumSwipeDistance) && x1 < drawerWidth && xDiff > yDiff){
        console.log('swiped back')
        if (sideDrawer.classList.contains('active')){
            sideDrawer.classList.remove('active')
        }
    }
})

const toggleSubItemActive = (subItem) => {
    if (subItem !== undefined){
        subItem.classList.toggle('active');
    }
}

// add click listener to all drawerItemTitle elements to unhide their sibling subItem elements 
const drawerItemsList = Array.from(document.getElementsByClassName('drawerItem'));
drawerItemsList.forEach(item => {
    let subItems = item.getElementsByClassName('subItems'); 
    // add event listener to item to toggle active class of the first (and only) subItem in that element 
    item.addEventListener('click', () => toggleSubItemActive(subItems[0]))
    // debugger
}) 



// Array.from(di.children).filter(item => item.classList.contains('subItem')).forEach(item => item.classList.toggle('active'))

