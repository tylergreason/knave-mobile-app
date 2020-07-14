// add button to toggle dev mode 
const devButton = document.createElement('button'); 
devButton.innerText = 'dev mode'; 
devButton.id = 'devButton'; 
mainTitle.appendChild(devButton)

let devDataString = `
    <div id='devDataWrapper'>
        <div id=devOpenData>
            Open drawer touch data shows here 
        </div>
        <div id=devCloseData>
            Close drawer touch data shows here 
        </div>
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

const setDevTouchData = dataObject => {

    // round all numbers 
    for (const prop in dataObject){
        if (typeof(dataObject[prop]) === 'number'){
            dataObject[prop] = Math.floor(dataObject[prop])
        }
    }

    // make string to hold data text formatting 
    const string = `x1: ${dataObject.x1} x2: ${dataObject.x2} 
    <br>
    xDiff: ${dataObject.xDiff}
    <br> 
    time: ${dataObject.timeDiff}
    <br>
    velocity (px/ms): ${(dataObject.xDiff/dataObject.timeDiff).toFixed(4)}`

    if (dataObject.type === 'open'){
        devOpenData.innerHTML = 
        `
        Open Drawer
        <br>
        ${string}    
        `
    }else if (dataObject.type === 'close'){
        devCloseData.innerHTML = 
        `
        Close Drawer
        <br>
        ${string}
        `
    }
}