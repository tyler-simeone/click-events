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