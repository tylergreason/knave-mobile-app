// console.log(reactionGeneratorButton);
// const reactionsTable = {
//     Hostile
// 3-5: Unfriendly
// 6-8: Unsure
// 9-11: Talkative
//     Helpful
// }

// find the LI's that will be highlighted with reaction roll function 
const reactionElements = Array.from(reactionsList.getElementsByTagName('li')); 

// function to remove highlighted class from all reaction LIs 
const removeReactionHighlighting = () => {
    reactionElements.forEach(ele => ele.classList.remove('highlighted'));
}

const generateReaction = () => {
    // remove highlighted class from all reaction LIs
    removeReactionHighlighting() 
    // console.log(reactionElements); 

    // roll 2D6 then add the results 
    let roll1 = Math.floor(Math.random()*6)+1; 
    let roll2 = Math.floor(Math.random()*6)+1; 
    let total = roll1 + roll2; 

    //adding timeout to setting the class so the animation will replay on elements that are already highlighted 
    window.setTimeout(() => {
        if (total < 3){
            reactionElements[0].classList.add('highlighted')
        }else if (total > 2 && total < 6){
            reactionElements[1].classList.add('highlighted')
        }else if (total > 5 && total < 9){
            reactionElements[2].classList.add('highlighted')
        }else if (total > 8 && total < 12){
            reactionElements[3].classList.add('highlighted')
        }else {
            reactionElements[4].classList.add('highlighted')
        }
    },0)
    
    // console.log(reactionElements); 
}

reactionGeneratorButton.addEventListener('click', generateReaction); 