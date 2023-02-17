import "./NavBar.css"
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <nav className="nav-bar open">
        <div className="nav-toggle">&#62;</div>
        {/* <button className="nav-toggle">X</button> */}
      <div className="user-info">
        <img src="https://imgur.com/XSenBva.png" alt="" />
        <h2 className="user-name">{user.name.toUpperCase()}</h2>
      </div>
      <div className="nav-titles">
          Navigation
      </div>
      <div className="nav-list">
        <Link id="logout" className="nav-item active" onClick={handleLogOut} to="/">Logout</Link>
        <Link id="logout" className="nav-item" onClick={handleLogOut} to="/">Logout</Link>
        <Link id="logout" className="nav-item" onClick={handleLogOut} to="/">Logout</Link>
        <Link id="logout" className="nav-item" onClick={handleLogOut} to="/">Logout</Link>
        {/* <Link className="nav-links" to="/login">Login</Link> */}
      </div>
      <hr />
      <div className="nav-titles">
          Support
      </div>
      <div className="nav-list">
        <Link id="logout" className="nav-item active" onClick={handleLogOut} to="/">Logout</Link>
        <Link id="logout" className="nav-item" onClick={handleLogOut} to="/">Logout</Link>
      </div>
    </nav>
  );
}
