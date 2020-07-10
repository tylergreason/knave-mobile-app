// find all designer's notes elements 
const designerNotes = Array.from(document.getElementsByClassName('designerNotes')); 

// function to toggle .open class for .designerNotes elements 
const toggleOpen = ele => {
    // ele.classList.contains('open')
    // ?
    // ele.classList.remove('open')
    // :
    // ele.classList.add('open')
    ele.classList.toggle('open')
}

// iterate through, adding event listeners for clicks 
designerNotes.forEach(ele => {
    ele.addEventListener('click', event =>{
        // toggleOpen(ele); 
        let ani = toggleNote(ele);
        // ani.play();
    })
})


// create animation to apply to opening element 
let openFrames = [
    {
        maxHeight: '22px',
        maxWidth: '117px',
    },
    {
        maxWidth: '100%',
        offset: 0.001, 
    },
    {
        maxWidth: '100%',
        maxHeight: '100vh',
        // opacity: 1,
        // border: '3px solid black',
    }
]

let closeFrames = [
    {
        maxWidth: '100%',
        maxHeight: '100vh',
    }, 
    {
        // maxWidth: '117px',
        maxHeight: '22px',
        offset: 0.001
    },
    {
        maxHeight: '22px',
        maxWidth: '117px',
    }
]

let timing = {
    duration: 200, 
    fill: 'forwards', 
    easing: 'ease',
}

// create function to animate element 
const toggleNote = ele => {
    // check if element has open class and open or close depending 
    if (ele.classList.contains('open')){
        ele.classList.toggle('open')
        return ele.animate(closeFrames, timing); 
    }else{
        ele.classList.toggle('open')
        return ele.animate(openFrames, timing);
    }
}