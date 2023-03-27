import "./HomePage.css"
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <>
            <main className="home-page">
                <section className="home-event-container">
                    <h1>shows next event</h1>
                    <Link className="new-event-link" to="/events/new">Schedule An Event</Link>
                </section>
                <section className="home-upcoming-container">
                    <h1>Upcoming Events</h1>
                    <div>cards</div>
                    <button>slider</button>
                </section>
                {/* ///////////////////////// */}
                <section></section>
            </main>
        </>
    )
}