let body = document.body; 
// create element to listen for opening drawer event 
const openDrawerElement = document.createElement('div'); 
openDrawerElement.id = "openDrawerElement"; 
// create element to listen for closing the drawer 
const closeDrawerElement = document.createElement('div'); 
closeDrawerElement.id = "closeDrawerElement"; 
body.appendChild(closeDrawerElement); 
// openDrawerElement.style.zIndex = '3';
body.appendChild(openDrawerElement);
    
const drawerWidth = 250; 

const swipeAreaLeft = 0, minimumSwipeDistance = 60, swipeAreaRight = swipeAreaLeft + minimumSwipeDistance; 
// // set css drawer width to that which is set above 
// document.documentElement.style.setProperty(`--drawerWidth`, `${drawerWidth}px`);

// // add 'active' class to drawer to open and close it
const toggleMenuOpen = () => {
    if (sideDrawer.classList.contains('active')){
        closeMenu(sideDrawer);
    }else{
        openMenu(sideDrawer);
    }
}

toggler.addEventListener('click', toggleMenuOpen)


// touch specific functions for animating drawer open and closed 
const openMenu = ele => { 
    ele.classList.add('active');
    sideDrawer.style.left = null;
    mainWrapper.style.opacity = null;
    mainWrapper.classList.add('menuActive')
    //freeze scrolling 
    document.body.style.overflow = 'hidden'
    // add event listeners to closeDrawerElement 
    addCloseEventListeners(closeDrawerElement)
}

const closeMenu = ele => {
    // set transition style, which needs reset afterwards
    sideDrawer.style.transition = "0.2s"
    sideDrawer.style.left = null;
    mainWrapper.style.opacity = null;
    ele.classList.remove('active');
    mainWrapper.classList.remove('menuActive')
    // add the ability to scroll the page again 
    document.body.style.overflow = 'scroll'
    // remove event listeners from closeDrawerElement 
    removeCloseEventListeners(closeDrawerElement)
}


// swiping menu open touch feature. Define them outside events to ensure they can be shared between them. 
let x1, y1, timeStart, timeEnd; 
openDrawerElement.addEventListener('touchstart', (event) => {
    let touchLocation = event.targetTouches[0]
    x1 = touchLocation.clientX;
    y1 = touchLocation.clientY;
    timeStart = event.timeStamp; 
    // reset sideDrawer transition so it doesn't act jumpy while moving with touch 
    sideDrawer.style.transition = ""
    console.log(event);
    console.log(event.timeStamp);
})


openDrawerElement.addEventListener('touchmove', (event)=>{
    let yLocation = event.touches[0].clientY; 
    let xLocation = event.touches[0].clientX; 
    let yDiff = Math.abs(y1 - yLocation);
    let xDiff = Math.abs(x1 - xLocation);

    // keep drawer from extending out past its own width 
    if (xLocation > drawerWidth+x1){
        xLocation = drawerWidth+x1
    }

    // if the difference traveled along x axis is greater than y axis, start pulling drawer out 
    if (xDiff > yDiff){
        //freeze scrolling 
        document.body.style.overflow = 'hidden'

        // move drawer out
        sideDrawer.style.left = `${xLocation - (drawerWidth+x1)}px`;
        reduceOpacity(mainWrapper, xLocation, drawerWidth)
    }
    console.log(event.timeStamp);
    
})

openDrawerElement.addEventListener('touchend', event => {
    let x2 = event.changedTouches[0].clientX; 
    timeEnd = event.timeStamp; 
    let timeDiff = timeEnd - timeStart; 
    let xDiff = x2 - x1; 
    console.log(xDiff);
    
    // if the final x point is greater than 1/2 the drawerWidth, fire the open drawer animation 
    // or if it's been less than 200 miliseconds and the swipe was positive and at least 40px 
    if (xDiff > drawerWidth/4 || (timeDiff < 200 && xDiff > 19)){
        openMenu(sideDrawer)
    }else{
        closeMenu(sideDrawer)
    }
    sideDrawer.style.left = null
    console.log(`final timestamp is ${event.timeStamp}`);
    
    setDevTouchData({
        type: 'open',
        x1: x1, 
        x2: x2, 
        xDiff: xDiff,
        timeStart: timeStart,
        timeEnd: timeEnd, 
        timeDiff: timeDiff
    })
    
})


// // listen for click or tap on the body and close the sideDrawer if it's open 
// mainWrapper.addEventListener('click', e => {
//     if (sideDrawer.classList.contains('active')){
//         closeMenu(sideDrawer)
//     }
// })


// function to reduce mainWrapper opacity based on percentage the menu has scrolled out 
const reduceOpacity = (ele, fraction, total) => {
    let percent = fraction/total; 
    let opacity = 1.3 - percent; 
    if (opacity < 0.3){
        opacity = 0.3; 
    }
    ele.style.opacity = opacity;
}



const closeStart = event => {
    let touchLocation = event.targetTouches[0]
    x1 = touchLocation.clientX;
    y1 = touchLocation.clientY;
    timeStart = event.timeStamp; 
}

const closeMove = event => {
    let touchLocation = event.touches[0]; 
    let xLocation = touchLocation.clientX; 
    // let yLocation = touchLocation.clientY; 
    console.log(xLocation);
    // keep drawer from extending out past its own width 
    if (xLocation > drawerWidth+x1){
        xLocation = drawerWidth+x1
    }
    // remove sideDrawer 'active' class so it doesn't act jumpy while moving with touch 
    // this might be added on again if the user doesn't swipe far enough left to close the drawer (meaning openMenu() will fire again)
    sideDrawer.classList.remove('active');
    // find value that the drawer's left should be, and make sure it doesn't exceed 0 
    let marker = xLocation - x1; 
    if (marker > 0){
        marker = 0; 
    }
    reduceOpacity(mainWrapper, xLocation, drawerWidth)
    sideDrawer.style.left =`${marker}px`
}

const closeEnd = event => {
    let touchLocation = event.changedTouches[0]; 
    let x2 = touchLocation.clientX; 
    let xDiff = x1 - x2; 
    timeEnd = event.timeStamp; 
    timeDiff = timeEnd - timeStart; 
    console.log(`time diff is ${timeEnd - timeStart}`);
    console.log(`xDiff is ${xDiff}`);
        // decide to open or close the drawer based on how far the user pushed it 
        // or if the timeDiff is really small
        if (xDiff > drawerWidth/3 || timeDiff < 100){
            console.log('closing menu');
            closeMenu(sideDrawer)
        }else{
            console.log('openign menu');
            openMenu(sideDrawer)
        }
    setDevTouchData({
        type: 'close',
        x1: x1, 
        x2: x2, 
        xDiff: xDiff,
        timeStart: timeStart,
        timeEnd: timeEnd, 
        timeDiff: timeDiff
    })
}

// remove event listeners from closeDrawerElement 
const removeCloseEventListeners = ele => {
    ele.removeEventListener('touchstart', closeStart); 
    ele.removeEventListener('touchmove', closeMove); 
    ele.removeEventListener('touchend', closeEnd); 
}
// add event listeners to closeDrawerElement 
const addCloseEventListeners = ele => {
    ele.addEventListener('touchstart', closeStart); 
    ele.addEventListener('touchmove', closeMove); 
    ele.addEventListener('touchend', closeEnd); 
}