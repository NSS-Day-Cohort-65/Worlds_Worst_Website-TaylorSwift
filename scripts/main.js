import { Events } from "./events.js"

document.addEventListener(
    "click",
    (event) => {
        if(event.target.id === "homeButton") {
            window.alert("Alredy home!")
        }
        
    }
)

const mainContainer = document.querySelector("#eventItems")

const renderAllHTML = () => {
    mainContainer.innerHTML = Events()
}

renderAllHTML()