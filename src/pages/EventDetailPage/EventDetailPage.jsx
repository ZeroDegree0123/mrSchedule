import "./EventDetailPage.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import * as eventsAPI from "../../utilities/events-api";

export default function EventDetailPage() {
    const { eventId } = useParams();
    const [event, setEvent] = useState([]);

    useEffect(function () {
        const getEvent = async function() {
            const eventData = await eventsAPI.showEvent(eventId);
            setEvent(eventData);
        };
        getEvent();
    }, [])

    return (
        <>
            <main className="event-detail-page">
                    <h1 className="event-detail-name">{event.name}</h1>
                <section className="detail-page-header">
                    <div className="event-detail-date-container">
                        <h4>Scheduled For</h4>
                        <p className="event-detail-date">{event.date}</p>
                    </div>
                    <button className="event-complete-button">Complete Task</button>
                </section>
                <div className="line-breaker"></div>
                <section className="event-body-container">
                    <div className="event-detail-message-container">
                        <h4>Event Details</h4>
                        <p className="event-detail-message">{event.message}</p>
                    </div>
                    <button className="event-edit-button">Edit Task</button>
                </section>
                <div className="line-breaker-big"></div>
            </main>
        </>
    )
    // &#62; is equivelant to ">"
}