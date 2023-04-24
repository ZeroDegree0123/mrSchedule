import "./EventForm.css";
import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
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

    function handleDateChange(evt) {
        const {name, value } = evt.date
        setEvent({...event, [name]: value})
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <form className="event-form" autoComplete="off" onSubmit={handleSubmit}>
                <h2 className="event-title">Create Event</h2>
                <input id="name" className="form-inputs" type="text" name="name" value={event.name} onChange={handleChange} placeholder="Name Of Event"/>
                <input id="date" className="form-inputs" type="date" name="date" value={event.date} onChange={handleChange}/>
                {/* <DatePicker id="date" name="date" value={event.date} onChange={handleDateChange}/> */}
                <input id="time" className="form-inputs" type="text" name="time" value={event.time} onChange={handleChange} placeholder=" 00:00pm/am"/>
                <textarea id="message" className="form-inputs" rows="2" name="message" value={event.message} onChange={handleChange} placeholder="Event Details"/>
                <div className="form-button-container">
                    <button id="submit-button" className="form-buttons" >Add Event</button>
                    <button id="cancel-button" className="form-buttons"  onClick={() => {handleClick()}}>Cancel</button>
                </div>
            </form>
        </LocalizationProvider>
    )
}