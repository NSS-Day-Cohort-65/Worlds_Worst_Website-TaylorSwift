import { getEventsDatabase } from "./database.js";

const events = getEventsDatabase()
console.log(events[0])
export const Events = () => {
    let html = "<ul>"
    const listItems = events.map(event => {
        return `<li>${event.name} event at ${event.location} on ${event.date}</li>`

    })
    html += listItems.join("")
    html += "</ul>"
    
    return html
}