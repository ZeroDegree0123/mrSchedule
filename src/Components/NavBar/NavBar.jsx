import "./NavBar.css"
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <nav className="nav-bar">
      
            <Link id="logout" className="nav-links" onClick={handleLogOut} to="/">
              Logout
            </Link>
            <h2 className="user-name">WELCOME {user.name.toUpperCase()}!</h2>
            {/* <Link className="nav-links" to="/login">Login</Link> */}
          
    </nav>
  );
}
