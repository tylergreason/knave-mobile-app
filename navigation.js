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
            closeMenu(sideDrawer)
        })

        element.className = 'drawerItem'; 
        element.href = link; 
        element.innerText = title; 
        sideDrawer.appendChild(element); 
    })
}
generateNavigation(headers); 