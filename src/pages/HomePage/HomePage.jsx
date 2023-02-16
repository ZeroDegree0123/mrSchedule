import "./HomePage.css"

export default function HomePage() {
    return (
        <>
            <main className="home-page">
                <section className="home-event-container">
                    <h1>shows next event</h1>
                    <hr />
                    <button>Schedule An Event</button>
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