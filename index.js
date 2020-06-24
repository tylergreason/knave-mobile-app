// create element to listen for opening drawer event 
const openDrawerElement = document.createElement('div'); 
openDrawerElement.id = "openDrawerElement"; 
let body = document.getElementsByTagName('body')[0]; 
body.appendChild(openDrawerElement);

// create new hammer instance for opening drawer 
const openDrawerAction = new Hammer(openDrawerElement); 

openDrawerAction.on('pan right', e => {
    if (e.isFinal && e.deltaX > minimumSwipeDistance){
        openSideDrawer()
    }
})

// new hammer instance for closing drawer 
const closeDrawerAction = new Hammer(sideDrawer); 
closeDrawerAction.on('pan left', e => {
    if (e.isFinal && e.deltaX < (minimumSwipeDistance * -1)){
        closeSideDrawer()
    }
})



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
    sideDrawer.focus()
    sideDrawer.classList.add('active')
}

// closeMenuButton.addEventListener('click', toggleMenuOpen)
// define function to remove event listener from closeMenuButton 
// const removeEventListenerFromcloseMenuButton = () => {
//     closeMenuButton.removeEventListener('click', toggleMenuOpen)
// }

// toggler.addEventListener('click', toggleMenuOpen)



/*

// swiping menu open touch feature
let x1, y1; 
// let recentTouches = []; 
let firstX = ''; 
document.addEventListener('touchstart', (event) => {
    if (firstX === ''){
        firstX = event.changedTouches[0].clientX; 
        // console.log(firstX);
    }
    // console.log(event.timeStamp)
    // check for doubletap, make sure  recentTouches list isn't empty first 
    // if (recentTouches.length > 0){
    //     // console.log(recentTouches)
    //     // console.log(`${event.timeStamp} - ${recentTouches[recentTouches.length-1]}`);
    //     if ((event.timeStamp - recentTouches[recentTouches.length-1]) < 1000){
    //         console.log('double tap')
    //         recentTouches = [];
    //     }
    // }
    // recentTouches = [];
    // recentTouches.push(event.timeStamp); 
    // console.log(recentTouches);
    let touchLocation = event.targetTouches[0]
    x1 = touchLocation.clientX;
    y1 = touchLocation.clientY;
    // debugger
})


// document.addEventListener('touchmove', (event)=>{
    // console.log(event.touches[0].clientY)
    // console.log(event.touches[0].clientX)

    // toggler.style.left = event.touches[0].pageX + 'px'
    // toggler.style.top = event.touches[0].pageY + 'px'
    // console.log(event.touches[0].clientX)
    // if (event.touches[0].clientX > x1 + 20){
    //     // move drawer out 
    //     sideDrawer.style.width = event.touches[0].clientX;
    // }

// })

document.addEventListener('touchend', event => {
    let x2 = event.changedTouches[0].clientX; 
    let y2 = event.changedTouches[0].clientY; 
    let xDiff = Math.abs(x1 - x2); 
    let yDiff = Math.abs(y1 - y2); 

    // if the minimum distance swiped is (whatever the const set at the top of this page says) and the swipe started inside the swipe area (again, see the top of the page for those consts)
    // console.log(`${x1} ${x2}`)
    // debugger
    // if swiping right 
    if (xDiff > yDiff){

        if (x2 - x1 > minimumSwipeDistance && x1 < swipeAreaRight){
            if (!sideDrawer.classList.contains('active')){
                sideDrawer.classList.add('active')
            }
        }
        // if swiping left 
        else if ((x1 - x2 > minimumSwipeDistance) && x1 < drawerWidth && xDiff > yDiff){
            // console.log('swiped back')
            if (sideDrawer.classList.contains('active')){
                console.log('slide drawer back in ')
                sideDrawer.classList.remove('active')
            }
        }
    }
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


*/


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

// closeMenuButton.addEventListener('click', () => closeSideDrawer()); 
toggler.addEventListener('click', () => toggleMenuOpen())