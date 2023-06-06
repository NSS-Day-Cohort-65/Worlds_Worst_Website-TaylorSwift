import { getEventsDatabase } from "./database.js";

const events = getEventsDatabase()
console.log(events[0])
export const Events = () => {
    let html = "<ul>"
    const listItems = events.map(event => {
        return `<li><a href="${event.link}">${event.name} event at ${event.location} on ${event.date}</a></li>`

    })
    html += listItems.join("")
    html += "</ul>"
    
    return html
}