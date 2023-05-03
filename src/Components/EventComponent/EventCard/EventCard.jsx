import "./EventCard.css"
import { Link } from "react-router-dom"
import * as eventsAPI from "../../../utilities/events-api"

export default function EventCard({event, user}) {
    // const eventDate = event.date.slice(0, 10)

    return (
        <>
            <div className="event-card">
                <div className="event-card-left">
                    <div className="color-box"></div>
                    <Link className="event-card-info" to={`/events/${event._id}`}>
                        <h2 className="card-name">{event.name}</h2>
                        <p className="card-scheduled-time">Scheduled For {event.date}</p>
                    </Link>
                </div>
                <div className="event-card-right">
                    <div className="blue-strip"></div>
                    <div className="star"></div>
                </div>
            </div>
        </>
    )
}