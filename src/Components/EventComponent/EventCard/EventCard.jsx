import "./EventCard.css"

export default function EventCard({event, user}) {
    const eventDate = event.date.slice(0, 10)

    return (
        <>
            <div className="event-card">
                <h2 className="card-name">{event.name}</h2>
                <div className="card-date-time">
                    <p className="event-time">{eventDate}</p>
                    <p className="event-time">{event.time}</p>
                </div>
                <p className="card-message">{event.message}</p>
                <div className="card-button-container">
                    <button className="card-buttons">Edit</button>
                    <button className="card-buttons">Delete</button>
                </div>
            </div>
        </>
    )
}