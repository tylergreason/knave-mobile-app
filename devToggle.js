// function to toggle whether touch areas are shown 
const toggleTouchAreasOpacities = () => {
    closeDrawerElement.classList.toggle('show'); 
    openDrawerElement.classList.toggle('show'); 
    devButton.classList.toggle('show');
}

// add button to toggle dev mode 
const devButton = document.createElement('button'); 
devButton.innerText = 'dev mode'; 
devButton.id = 'devButton'; 
mainTitle.appendChild(devButton)
devButton.addEventListener('click', toggleTouchAreasOpacities)