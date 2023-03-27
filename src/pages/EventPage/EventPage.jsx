import "./EventPage.css"
import EventList from "../../Components/EventComponent/EventList/EventList"

export default function EventPage({events}) {
    return (
        <>
            <main className="event-page">
                <EventList events={events}/>
            </main>
        </>
    )
}