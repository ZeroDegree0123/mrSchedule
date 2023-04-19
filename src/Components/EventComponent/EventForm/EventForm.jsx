import "./EventForm.css";
import { useState } from "react";
import * as eventsAPI from "../../../utilities/events-api"

export default function EventForm({user, formOpen, setFormOpen}) {
    const [event, setEvent] = useState({
        name: "",
        message: "",
        date: "",
        time: "",
        user: user,
    })

    if (!formOpen) return null;

    function handleClick() {
        setFormOpen(false)
    }

    function handleChange(evt) {
        setEvent({...event, [evt.target.name]: evt.target.value})
    }

    async function handleSubmit(evt) {
        setFormOpen(false);
        evt.preventDefault();
        eventsAPI.newEvent(event);
        setEvent({
            name: "",
            message: "",
            date: "",
            time: "",
            user: user
        })
        
    }

    return (
        <>
                <form className="event-form" autoComplete="off" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name Of Event</label>
                    <input id="name" className="form-inputs" type="text" name="name" value={event.name} onChange={handleChange} />
                    <label htmlFor="date">Event Date</label>
                    <input id="date" className="form-inputs" type="date" name="date" value={event.date} onChange={handleChange} placeholder="date xx/xx/xxxx"/>
                    <label htmlFor="time">Event Time</label>
                    <input id="time" className="form-inputs" type="text" name="time" value={event.time} onChange={handleChange} placeholder=" 00:00pm/am"/>
                    <label htmlFor="message">Event Details</label>
                    <textarea id="message" className="form-inputs" rows="4" name="message" value={event.message} onChange={handleChange}/>
                    <button>Add Event</button>
                    <button onClick={() => {handleClick()}}>Cancel</button>
                </form>
        </>
    )
}