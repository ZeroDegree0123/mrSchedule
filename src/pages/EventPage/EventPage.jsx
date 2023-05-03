import "./EventPage.css"
import EventList from "../../Components/EventComponent/EventList/EventList"

export default function EventPage({events, user}) {
    return (
        <>
            <main className="event-page">
                <h1 className="event-page-title">Scheduled Events</h1>
                <EventList events={events} user={user}/>
            </main>
        </>
    )
}