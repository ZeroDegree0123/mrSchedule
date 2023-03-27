import "./NewEventPage.css"
import EventForm from "../../Components/EventComponent/EventForm/EventForm"

export default function NewEventPage({user}) {
    return (
        <main className="new-event-page">
            <h1>New Event</h1>
            <EventForm user={user}/>
        </main>
   
    )
}