import "./EventList.css"
import EventCard from "../EventCard/EventCard"

export default function EventList({events, user}) {
    const userEvents = events.filter((event) => {
        return event.user === user._id
    })

    const allEvents = userEvents.map((event, id) => 
        <EventCard key={id} event={event} user={user} />
    );
   
    return (
        <>  
            {allEvents}
        </>
    )
}
