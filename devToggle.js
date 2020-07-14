// add button to toggle dev mode 
const devButton = document.createElement('button'); 
devButton.innerText = 'dev mode'; 
devButton.id = 'devButton'; 
mainTitle.appendChild(devButton)

let devDataString = `
    <div id='devDataWrapper'>
        touch data shows here 
    </div>
`
// add element to show touch data 
const devData = document.createRange().createContextualFragment(devDataString)
document.body.appendChild(devData); 


// function to toggle whether touch areas are shown 
const toggleTouchAreasOpacities = () => {
    closeDrawerElement.classList.toggle('show'); 
    openDrawerElement.classList.toggle('show'); 
    devButton.classList.toggle('show');
    devDataWrapper.classList.toggle('show'); 
}

devButton.addEventListener('click', toggleTouchAreasOpacities)

const setDevData = dataObject => {
    // round all numbers 
    for (const prop in dataObject){
        console.log(dataObject[prop]);
        
        if (typeof(dataObject[prop]) === 'number'){
            dataObject[prop] = Math.floor(dataObject[prop])
        }
    }
    devDataWrapper.innerHTML = 
    `
    ${dataObject.type}
    <br>
    x1: ${dataObject.x1} x2: ${dataObject.x2} 
    <br>
    xDiff: ${dataObject.xDiff}
    <br> 
    time: ${dataObject.timeDiff}
    <br>
    velocity (px/milisecond): ${(dataObject.xDiff/dataObject.timeDiff).toFixed(4)}
    `
}