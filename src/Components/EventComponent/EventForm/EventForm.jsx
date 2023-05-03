import "./EventForm.css";
import { useEffect, useState } from "react";
import * as eventsAPI from "../../../utilities/events-api"

export default function EventForm({user, formOpen, setFormOpen, editEvent, update}) {
    const [event, setEvent] = useState({
        name: "",
        message: "",
        date: "",
        time: "",
        user: user,
    })
    
    useEffect(function() {
        if  (editEvent) {
            const setExistingData = () => 
                setEvent({
                    name: editEvent.name,
                    message: editEvent.message,
                    date: editEvent.date,
                    time: editEvent.time,
                    user: editEvent.user
                });
            setExistingData();
         }
    }, [editEvent])

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
        });
    }

    async function handleUpdate(evt) {
        setFormOpen(false);
        evt.preventDefault();
        const updatedEvent = await eventsAPI.updateEvent(event, editEvent._id);
        setEvent(updatedEvent);
    };


    return (
        // <LocalizationProvider dateAdapter={AdapterDayjs}>
            <form className="event-form" autoComplete="off" onSubmit={(evt) => update ? handleUpdate(evt, event) : handleSubmit(evt)}>
                <h2 className="event-title">Event Form</h2>
                <input id="name" className="form-inputs" type="text" name="name" value={event.name} onChange={handleChange} placeholder="Name of Event"/>
                <input id="date" className="form-inputs" type="date" name="date" value={event.date} onChange={handleChange}/>
                {/* <DatePicker id="date" name="date" value={event.date} onChange={handleDateChange}/> */}
                <input id="time" className="form-inputs" type="text" name="time" value={event.time} onChange={handleChange} placeholder="Time - 00:00pm/am"/>
                <textarea id="message" className="form-inputs" rows="2" name="message" value={event.message} onChange={handleChange} placeholder="Event Details"/>
                <div className="form-button-container">
                    <button id="submit-button" className="form-buttons" >Add Event</button>
                    <button id="cancel-button" className="form-buttons"  onClick={() => {handleClick()}}>Cancel</button>
                </div>
            </form>
        // </LocalizationProvider>
    )
}