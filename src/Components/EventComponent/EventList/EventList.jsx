import "./EventList.css"
import EventCard from "../EventCard/EventCard"

export default function EventList({events, user}) {
    const allEvents = events.map((event, id) => 
        <EventCard
            key={id}
            event={event}
            user={user}
        />
    );
    // console.log(events)
    return (
        <>  
            {allEvents}
        </>
    )
}