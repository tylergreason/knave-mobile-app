// create element to listen for opening drawer event 
const openDrawerElement = document.createElement('div'); 
openDrawerElement.id = "openDrawerElement"; 
// openDrawerElement.style.zIndex = '3';
let body = document.getElementsByTagName('body')[0]; 
body.appendChild(openDrawerElement);
    
const drawerWidth = 300; 

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
}

const closeMenu = ele => {
    // set transition style, which needs reset afterwards
    sideDrawer.style.transition = "0.2s"
    sideDrawer.style.left = null;
    ele.classList.remove('active');
    mainWrapper.classList.remove('menuActive')
    // add the ability to scroll the page again 
    document.body.style.overflow = 'scroll'
}


// swiping menu open touch feature
let x1, y1; 
openDrawerElement.addEventListener('touchstart', (event) => {
    console.log(event);
    let touchLocation = event.targetTouches[0]
    x1 = touchLocation.clientX;
    y1 = touchLocation.clientY;
    // reset sideDrawer transition so it doesn't act jumpy while moving with touch 
    sideDrawer.style.transition = ""
})


openDrawerElement.addEventListener('touchmove', (event)=>{
    // console.log(event.touches[0].clientY)
    // console.log(event.touches[0].clientX)
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

        // calc percent moved 
        let percent = xLocation/drawerWidth; 
        reduceOpacity(mainWrapper, xLocation, drawerWidth)
        // console.log(window.getComputedStyle(sideDrawer).left );
        
    }
})

openDrawerElement.addEventListener('touchend', event => {
    let x2 = event.changedTouches[0].clientX; 
    let y2 = event.changedTouches[0].clientY; 
    // if the final x point is greater than 1/2 the drawerWidth, fire the open drawer animation 
    if (x2 > drawerWidth/4){
        // sideDrawer.style.left = 0+'px';
        // openMenu(sideDrawer)
        openMenu(sideDrawer)
    }else{
        // sideDrawer.style.left = -drawerWidth+'px';
        // closeMenu(sideDrawer);
        closeMenu(sideDrawer)
    }
    sideDrawer.style.left = null
})


// listen for click or tap on the body and close the sideDrawer if it's open 
mainWrapper.addEventListener('click', e => {
    if (sideDrawer.classList.contains('active')){
        closeMenu(sideDrawer)
    }
})


// function to reduce mainWrapper opacity based on percentage the menu has scrolled out 
const reduceOpacity = (ele, fraction, total) => {
    let percent = fraction/total; 
    let opacity = 1.3 - percent; 
    if (opacity < 0.3){
        opacity = 0.3; 
    }
    ele.style.opacity = opacity;
}

// close side drawer listeners 
sideDrawer.addEventListener('touchstart', event => {
    let touchLocation = event.targetTouches[0]
    x1 = touchLocation.clientX;
    y1 = touchLocation.clientY;
})

sideDrawer.addEventListener('touchmove', event => {
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
    let marker = xLocation - drawerWidth; 
    if (marker > 0){
        marker = 0; 
    }
    sideDrawer.style.left =`${marker}px`
})

sideDrawer.addEventListener('touchend', event => {
    let touchLocation = event.changedTouches[0]; 
    let x2 = touchLocation.clientX; 

    let xDiff = x1 - x2; 
    console.log(`xDiff is ${xDiff}`);
    
    // decide to open or close the drawer based on how far the user pushed it 
    if (xDiff > drawerWidth/2){
        console.log('closing menu');
        
        closeMenu(sideDrawer)
    }else{
        console.log('openign menu');
        openMenu(sideDrawer)
    }
})

// const toggleSubItemActive = (subItem) => {
//     if (subItem !== undefined){
//         subItem.classList.toggle('active');
//     }
// }

// // find all titles, add this event listener to them
// let titles = Array.from(document.getElementsByClassName('drawerItemTitle')); 
// let subItems = Array.from(document.getElementsByClassName('subItems'))

// titles.forEach(title => {
//     // find the UL that matches this title element (the next sibling element) and add toggle its visitbility with a callback to toggleSubItemActive(the matching UL) 
//     let matchingUL = title.nextElementSibling;
//     console.log(matchingUL);
//     if (matchingUL !== undefined){
//         title.addEventListener('click', () => toggleSubItemActive(matchingUL))
//     }
// })

// // on a subitem click, hide the drawer
// subItems.forEach(subItem => {
//     subItem.addEventListener('click', toggleMenuOpen)
// })





// create new hammer instance for opening drawer 
// const openDrawerAction = new Hammer(openDrawerElement, {}); 

// // openDrawerAction.on('swiperight', e => {
// //     console.log(e);
    
// //     e.preventDefault();
// //     if (e.isFinal && e.deltaX > minimumSwipeDistance){
// //         console.log('ajsdfljas');
        
// //         console.log(document.activeElement);
// //         e.target.focus()
// //         console.log(document.activeElement);
// //         openSideDrawer()
// //         window.setTimeout(sideDrawer.focus(), 0)
// //         // debugger
// //     }
// // })

// // new hammer instance for closing drawer 
// const closeDrawerAction = new Hammer(sideDrawer); 
// closeDrawerAction.on('swipe left', e => {
//     if (e.isFinal && e.deltaX < (minimumSwipeDistance * -1)){
//         closeSideDrawer()
//     }
// })


// // create a region on the document body ZingTouch to work 
// let zt = new ZingTouch.Region(document.body); 


// // add listener to element to open drawer 
// zt.bind(openDrawerElement, 'swipe', function(e){
//     console.log(e);
//     // check if swipe was to the right, and open drawer if it was 
//     let direction = e.detail.data[0].currentDirection; 
//     console.log(direction);
//     if ((direction < 361 && direction > 334) || (direction > 0 && direction < 26)){
//         openSideDrawer()
//         // add closing drawer function to drawer 
//     zt.bindOnce(sideDrawer, 'swipe', function(e){
//         console.log('side drawer swiped');
//         let direction = e.detail.data[0].currentDirection; 
//         if (direction < 206 && direction > 154){
//             closeSideDrawer()
//         }
//         // console.log(e);
//     })
//     }  
// })
