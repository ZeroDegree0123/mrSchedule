import "./EventForm.css";
import { useState } from "react";
import * as eventsAPI from "../../../utilities/events-api"

export default function EventForm() {
    const [event, setEvent] = useState({
        name: "",
        message: "",
        date: "",
        time: "",
    })

    function handleChange(evt) {
        setEvent({...event, [evt.target.name]: evt.target.value})
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        eventsAPI.newEvent(event);
        setEvent({
            name: "",
            message: "",
            date: "",
            time: "",
        })
        
    }

    return (
        <>
            <form className="event-form" autoComplete="off" onSubmit={handleSubmit}>
                <input className="form-inputs" type="text" name="name" value={event.name} onChange={handleChange} placeholder="event name"/>
                <input className="form-inputs" id="message-input" type="text" name="message" value={event.message} onChange={handleChange} placeholder="event details"/>
                <input className="form-inputs" type="text" name="date" value={event.date} onChange={handleChange} placeholder="date xx/xx/xxxx"/>
                <input className="form-inputs" type="text" name="time" value={event.time} onChange={handleChange} placeholder="time 00:00pm/am"/>
                <button>Add Event</button>
            </form>
        </>
    )
}