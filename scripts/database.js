const database = [
    {
        id: 1,
        name: "Nashville Soccer Club vs Manchester United",
        date: "July 4, 2023",
        location: "GEODIS Park",
        link: "null"
    },
    {
        id: 2,
        name: "Taylor Swift concert",
        date: "July 4, 2023",
        location: "Nissan Stadium",
        link: "https://www.ticketmaster.com/lil-wayne-tickets/artist/712214"
    },
    {
        id: 3,
        name: "Musicians Corner",
        date: "July 4, 2023",
        location: "Memphis",
        link: "https://nashvilleguru.com/33631/musicians-corner"
    }, 
    {
        id: 4,
        name: "CMA Fest",
        date: "July 4, 2023",
        location: "Downtown Nashville",
        link: "https://cmafest.com/transportation/"
    },
    {
        id: 5,
        name: "CMA Fest",
        date: "July 5, 2023",
        location: "Downtown Nashville",
        link: "https://cmafest.com/transportation/"
    },
    {
        id: 6,
        name: "Shania Twain",
        date: "June 7, 2023",
        location: "GEODIS Park",
        link: "https://www.trybooking.com/events/992291/sessions"
    },
    {
        id: 7,
        name: "Weekend Hockey",
        date: "July 10, 2023",
        location: "Centennial Sportsplex",
        link: "https://hockey.travelsports.com/tournaments/weekend-hockey-nashville"
    }
]
//getter 
export const getEventsDatabase = () => {
    return database.map(event => ({...event}))
}