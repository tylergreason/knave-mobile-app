// find all designer's notes elements 
const designerNotes = Array.from(document.getElementsByClassName('designerNotes')); 

// function to toggle .open class for .designerNotes elements 
const toggleOpen = ele => {
    ele.classList.contains('open')
    ?
    ele.classList.remove('open')
    :
    ele.classList.add('open')
}

// iterate through, adding event listeners for clicks 
designerNotes.forEach(ele => {
    ele.addEventListener('click', event =>{
        toggleOpen(ele); 
    })
})