import "./HomePage.css"
import { useState,  } from "react"
import { Link } from "react-router-dom"
import EventForm from "../../Components/EventComponent/EventForm/EventForm"; 
import EventListSingle from "../../Components/EventComponent/EventListSingle/EventListSingle";

export default function HomePage({user, events}) {
    const [formOpen, setFormOpen] = useState(false);

    return (
        <main className="home-page">
            <section className="new-event-container">
                <div className="new-event-box">
                    <EventForm user={user} formOpen={formOpen} setFormOpen={setFormOpen}/>
                    <button className="new-event-button" onClick={() => {setFormOpen(true)}}>+ Schedule An Event</button>
                </div>
            </section>
            <section className="home-upcoming-container">
                <h1 className="home-upcoming-title">Upcoming Events</h1>
                <EventListSingle user={user} events={events}/>
             
            </section>
        </main>
    )
}