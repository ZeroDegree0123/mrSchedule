import "./EventListSingle.css"
import EventCard from "../EventCard/EventCard"

export default function EventListSingle({user, events}) {
    const userEvents = events.filter((event) => {
        return event.user === user._id
    })

    let eventDatesToNumbers = userEvents.map((event) => {
        return event.date;
    })
    eventDatesToNumbers.sort()

    const singleEvent = userEvents.filter((event) => {
        return event.date === eventDatesToNumbers[0]
    })

    // const 
    // console.log(singleEvent)
    const allEvents = singleEvent.map((event, id) => 
        <EventCard key={id} event={event} user={user} />
    );

    return (
        <>  
            {allEvents}
        </>
    )
}
