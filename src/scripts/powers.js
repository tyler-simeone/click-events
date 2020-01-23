const flightHandlerFunction = () => {
    const flightSection = document.getElementById("flight");
    flightSection.classList.remove("disabled");
    flightSection.classList.add("enabled");
}

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);

const mrHandlerFunction = () => {
    const mrSection = document.getElementById("mindreading");
    mrSection.classList.remove("disabled");
    mrSection.classList.add("enabled");
}

document.querySelector("#activate-mindreading").addEventListener("click", mrHandlerFunction);

// Added extra layer here to click again to turn it off. 
// Could probably do a .toggle
const xrayHandlerFunction = () => {
    const xraySection = document.getElementById("xray");
    if (xraySection.className === "power disabled") {
        xraySection.classList.remove("disabled");
        xraySection.classList.add("enabled");
    } else {
        xraySection.classList.remove("enabled");
        xraySection.classList.add("disabled");
    }
}

document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);

// Below is the code to modify multiple ele's class names at one time.
// Had to loop through the node list / arr of section ele's and pass
// in a callback fn to the arr method that modifies the class forEach
// element
const actvAllHandlerFunction = () => {
    const allSectionEls = document.querySelectorAll("section");
    
    allSectionEls.forEach(function (el) {
        el.classList.remove("disabled");
        el.classList.add("enabled");
    })
}

document.querySelector("#activate-all").addEventListener("click", actvAllHandlerFunction);

const deactvAllHandlerFunction = () => {
    const allSectionEls = document.querySelectorAll("section");
    
    allSectionEls.forEach(function (el) {
        el.classList.remove("enabled");
        el.classList.add("disabled");
    })
}

document.querySelector("#deactivate-all").addEventListener("click", deactvAllHandlerFunction);