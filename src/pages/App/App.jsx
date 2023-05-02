import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import * as eventsAPI from "../../utilities/events-api"
import NavBar from "../../Components/NavBar/NavBar";
import Auth from "../AuthPage/AuthPage";
import AccountPage from "../AccountPage/AccountPage";
import EventPage from "../EventPage/EventPage";
import EventDetailPage from "../EventDetailPage/EventDetailPage";
import Home from "../HomePage/HomePage"

export default function App() {
  const [user, setUser] = useState(getUser());
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
 
  useEffect(function() {
    const getEvents = async function() {
      const eventData = await eventsAPI.allEvents();
      setEvents(eventData);
    };
    getEvents();
  }, []) 

  function redirect() {
    let path = `/`;
    navigate(path);
  };

  return (
      <main className="App">
        {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home user={user} events={events}/>} />
            <Route path="/events" element={<EventPage user={user} events={events}/>}/>
            <Route path="/events/:eventId/*" element={<EventDetailPage redirect={redirect}/>}/>
            <Route path="/account" element={<AccountPage user={user}/>}/>
          </Routes>  
        </>
        :
        <Auth setUser={setUser}/>
      }
      </main>
  );
}
