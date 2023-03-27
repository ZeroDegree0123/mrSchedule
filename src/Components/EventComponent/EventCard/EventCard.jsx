import "./EventCard.css"

export default function EventCard({event, user}) {
    
    return (
        <>
            <div>
                <h1>{event.name}</h1>
                <p>{event.message}</p>
                <p>{event.time}</p>
                <p>{event.date}</p>
            </div>
        </>
    )
}