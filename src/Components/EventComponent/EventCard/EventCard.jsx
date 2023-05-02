import "./EventCard.css"
import { Link } from "react-router-dom"
import * as eventsAPI from "../../../utilities/events-api"

export default function EventCard({event, user}) {
    const eventDate = event.date.slice(0, 10)

    // const handleClick = async () => {
    //     const response = await fetch("/api/workouts/" + event._id, {
    //         method: "DELETE"
    //     })
    //     const json = await response.json()
    // }

    // const handleClick = async () => {
    //     const response = eventsAPI.singleEvent();
    //     const json = await response.json()

    //     if (response.ok) {

    //     }

    // }

    

    return (
        <>
            <div className="event-card">
                <div className="event-card-left">
                    <div className="color-box"></div>
                    <Link className="event-card-info" to={`/events/${event._id}`}>
                        <h2 className="card-name">{event.name}</h2>
                        <p>Scheduled For {event.date}</p>
                        {/* <span>delete</span> */}
                    </Link>
                </div>
                {/* <div className="card-date-time">
                    <p className="event-time">{eventDate}</p>
                    <p className="event-time">{event.time}</p>
                </div> */}
                {/* <p className="card-message">{event.message}</p> */}
                {/* <div className="card-button-container">
                    <button id="edit-button" className="card-buttons">Edit</button>
                    <button id="delete-button" className="card-buttons">Delete</button>
                </div> */}
                <div className="event-card-right">
                    <div className="blue-strip"></div>
                    <div className="star"></div>
                </div>
            </div>
        </>
    )
}