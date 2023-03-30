import "./EventPage.css"
import EventList from "../../Components/EventComponent/EventList/EventList"

export default function EventPage({events, user}) {
    return (
        <>
            <main className="event-page">
                <EventList events={events} user={user}/>
                <h1>hello</h1>
            </main>
        </>
    )
}