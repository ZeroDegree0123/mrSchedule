import "./EventDetailPage.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import * as eventsAPI from "../../utilities/events-api";
import EventForm from "../../Components/EventComponent/EventForm/EventForm"

export default function EventDetailPage({redirect}) {
    const { eventId } = useParams();
    const [event, setEvent] = useState([]);
    const [formOpen, setFormOpen] = useState(false);

    useEffect(function () {
        const getEvent = async function() {
            const eventData = await eventsAPI.showEvent(eventId);
            setEvent(eventData);
        };
        getEvent();
    }, [])

    const handleDelete = function() {
        eventsAPI.deleteEvent(eventId);
        redirect();
    }
    
    return (
        <>
            <main className="event-detail-page">
                <EventForm formOpen={formOpen} setFormOpen={setFormOpen} editEvent={event} update="update"/>
                <section className="detail-page-header">
                    <h1 className="event-detail-name">{event.name}</h1>
                    <div className="event-detail-date-container">
                        <h4>Scheduled For</h4>
                        <p className="event-detail-date">{event.date}</p>
                        <p className="event-detail-date">{event.time}</p>
                    </div>
                    {/* <button className="event-complete-button">Complete Task</button> */}
                </section>
                <div className="line-breaker"></div>
                <section className="event-body-container">
                    <div className="event-detail-message-container">
                        <h4>Event Details</h4>
                        <p className="event-detail-message">{event.message}</p>
                    </div>
                </section>
                <div className="event-options-container">
                    <button className="event-edit-button" onClick={() => {setFormOpen(true)}}>Edit Task</button>
                    <button id="delete" className="event-edit-button" onClick={handleDelete}>Delete Task</button>
                </div>
                <div className="line-breaker-big"></div>
            </main>
        </>
    )
    // &#62; is equivelant to ">"
}