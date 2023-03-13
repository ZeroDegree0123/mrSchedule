import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../Components/NavBar/NavBar";
import Home from "../HomePage/HomePage"
import Auth from "../AuthPage/AuthPage";
import NewEventPage from "../NewEventPage/NewEventPage";
import EventPage from "../EventPage/EventPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [events, setEvents] = useState(null)
  return (
    <main className="App">
      {user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventPage />}/>
          <Route path="/events/new" element={<NewEventPage />}/>

          {/* <Route path="/auth" element={<Auth setUser={setUser}/>}/> */}
        </Routes>  
      </>
      :
        <Auth setUser={setUser}/>
      }
    </main>
  );
}
