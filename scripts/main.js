import { Events } from "./events.js"

document.addEventListener(
    "click",
    (event) => {
        if(event.target.id === "homeButton") {
            window.alert("Alredy home!")
        }
        
    }
)

const evilButton = document.getElementById("evilButton")
const OFFSET = 100
//set event listener to close the page if evil button is clicked
evilButton.addEventListener(
    "click",
    () => {
        alert("Nice try!")
        window.close()
    }
)

document.addEventListener(
    "mousemove",
    (event) => {
        //get mouse location
        const x = event.pageX
        const y = event.pageY

        //get buttons size and location
        const buttonBox = evilButton.getBoundingClientRect()
        //find how close the mouse is to the center of the button
        const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
        const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)

        //check for OFFSET - how close the mouse can be for button to move(OFFSET is 100px)
        const horizontalOffset = buttonBox.width / 2 + OFFSET
        const verticalOffset = buttonBox.height / 2 + OFFSET

        //math to determine where button needs to be
        //check if cursor is closer than OFFSET by x and y
        if(Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
            //set new button position - the closer the cursor, the futher the button goes
            setButtonPosition(
                buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
                buttonBox.y + verticalOffset / verticalDistanceFrom * 10
            )
        }
    }
)

function setButtonPosition(left, top) {
    //get window and button size to check if button overlaps the edge of the window
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = evilButton.getBoundingClientRect()

    //check left side - bounce right
    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
        left = windowBox.right - buttonBox.width - OFFSET
    }

    if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
        left = windowBox.left + OFFSET
    }

    if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
        top = windowBox.bottom - buttonBox.height - OFFSET
    }
    
    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
        top = windowBox.top + OFFSET
    }

    evilButton.style.left = `${left}px`
    evilButton.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}

const mainContainer = document.querySelector("#eventItems")

const renderAllHTML = () => {
    mainContainer.innerHTML = Events()
    
}

renderAllHTML()

