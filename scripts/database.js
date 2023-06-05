const database = [
    {
        id: 1,
        name: "Nashville Soccer Club vs Manchester United",
        date: "July 4, 2023",
        location: "GEODIS Park"
    },
    {
        id: 2,
        name: "Taylor Swift concert",
        date: "July 4, 2023",
        location: "Nissan Stadium"
    },
    {
        id: 3,
        name: "Musicians Corner",
        date: "July 4, 2023",
        location: "Memphis"
    }, 
    {
        id: 4,
        name: "CMA Fest",
        date: "July 4, 2023",
        location: "Downtown Nashville"
    }
]

export const getEventsDatabase = () => {
    database.map (event => ({...event}))
}