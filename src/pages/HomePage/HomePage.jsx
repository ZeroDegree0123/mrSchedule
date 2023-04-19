import "./HomePage.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import EventForm from "../../Components/EventComponent/EventForm/EventForm"; 

export default function HomePage({user}) {
    const [formOpen, setFormOpen] = useState(false);

    return (
        <>
            <main className="home-page">
                <div className="next-event-container">
                    next event container
                </div>
                <hr />
                <section className="new-event-container">
                    <EventForm user={user} formOpen={formOpen} setFormOpen={setFormOpen}/>
                    <button className="new-event-link" onClick={() => {setFormOpen(true)}}>Schedule An Event</button>
                </section>
                <section className="home-upcoming-container">
                    <h1>Upcoming Events</h1>
                    <div>cards</div>
                    <button>slider</button>
                </section>
            </main>
        </>
    )
}