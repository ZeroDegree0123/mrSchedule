import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import Home from "../HomePage/HomePage"
import Auth from "../AuthPage/AuthPage";
import NavBar from "../../Components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/auth" element={<Auth setUser={setUser}/>}/> */}
        </Routes>  
      </>
      :
        <Auth setUser={setUser}/>
      }
    </main>
  );
}
