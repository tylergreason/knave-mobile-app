// create element to listen for opening drawer event 
const openDrawerElement = document.createElement('div'); 
openDrawerElement.id = "openDrawerElement"; 
// openDrawerElement.style.zIndex = '3';
let body = document.getElementsByTagName('body')[0]; 
body.appendChild(openDrawerElement);



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

    
const drawerWidth = 220; 

const swipeAreaLeft = 0, minimumSwipeDistance = 60, swipeAreaRight = swipeAreaLeft + minimumSwipeDistance; 
// // set css drawer width to that which is set above 
// document.documentElement.style.setProperty(`--drawerWidth`, `${drawerWidth}px`);

// // add 'active' class to drawer to open and close it
const toggleMenuOpen = () => {
    sideDrawer.classList.toggle('active'); 
}

const closeSideDrawer = () => {
    sideDrawer.classList.remove('active')
}

const openSideDrawer = () => {
    sideDrawer.classList.add('active')
}

// // generate sideDrawer buttons for navigation 
const headers = Array.from(document.getElementsByTagName('h2')); 

const generateNavigation = list => {
    list.forEach(item => {
        let link = '#' + item.id; 
        let title = item.childNodes[0].data; 
        let element = document.createElement('a'); 

        // add event listener to close menu on click 
        element.addEventListener('click', (e) => {
            // e.preventDefault()
            closeSideDrawer();
        })

        element.className = 'drawerItem'; 
        element.href = link; 
        element.innerText = title; 
        sideDrawer.appendChild(element); 
    })
}
generateNavigation(headers); 

// closeMenuButton.addEventListener('click', toggleMenuOpen)
// define function to remove event listener from closeMenuButton 
// const removeEventListenerFromcloseMenuButton = () => {
//     closeMenuButton.removeEventListener('click', toggleMenuOpen)
// }

toggler.addEventListener('click', toggleMenuOpen)





// swiping menu open touch feature
let x1, y1; 
// let recentTouches = []; 
let firstX = ''; 
openDrawerElement.addEventListener('touchstart', (event) => {
    console.log(event);
    
    if (firstX === ''){
        firstX = event.changedTouches[0].clientX; 
        console.log(firstX);
    }
    let touchLocation = event.targetTouches[0]
    x1 = touchLocation.clientX;
    y1 = touchLocation.clientY;
})


openDrawerElement.addEventListener('touchmove', (event)=>{
    // console.log(event.touches[0].clientY)
    // console.log(event.touches[0].clientX)
    let yLocation = event.touches[0].clientY; 
    let xLocation = event.touches[0].clientX; 
    let yDiff = Math.abs(y1 - yLocation);
    let xDiff = Math.abs(x1 - xLocation);

    // keep drawer from extending out past its own width 
    if (xLocation > drawerWidth){
        xLocation = drawerWidth
    }

    // if the difference traveled along x axis is greater than y axis, start pulling drawer out 
    if (xDiff > yDiff){
        //freeze scrolling 
        document.body.style.overflow = 'hidden'
        // move drawer out
        sideDrawer.style.left = `${xLocation - drawerWidth}px`;
    }
})

openDrawerElement.addEventListener('touchend', event => {
    // add the ability to scroll the page again 
    document.body.style.overflow = 'scroll'

    let x2 = event.changedTouches[0].clientX; 
    let y2 = event.changedTouches[0].clientY; 

    // if the final x point is greater than 1/3 the drawerWidth, fire the open drawer animation 
    if (x2 > drawerWidth/3){
        sideDrawer.style.left = 0+'px';
        console.log('open');
    }else{
        sideDrawer.style.left = -drawerWidth+'px';
        console.log('close');
    }

    let xDiff = Math.abs(x1 - x2); 
    let yDiff = Math.abs(y1 - y2); 

    // if the minimum distance swiped is (whatever the const set at the top of this page says) and the swipe started inside the swipe area (again, see the top of the page for those consts)
    // console.log(`${x1} ${x2}`)
    // debugger
    // if swiping right 
    // if (xDiff > yDiff){

    //     if (x2 - x1 > minimumSwipeDistance && x1 < swipeAreaRight){
    //         if (!sideDrawer.classList.contains('active')){
    //             sideDrawer.classList.add('active')
    //         }
    //     }
    //     // if swiping left 
    //     else if ((x1 - x2 > minimumSwipeDistance) && x1 < drawerWidth && xDiff > yDiff){
    //         // console.log('swiped back')
    //         if (sideDrawer.classList.contains('active')){
    //             console.log('slide drawer back in ')
    //             sideDrawer.classList.remove('active')
    //         }
    //     }
    // }
    firstX = '';
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





