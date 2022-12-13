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
      <h1>Gigi's Website</h1>
      
      <div>
        <Link to="orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="orders/new">New Order</Link>
        &nbsp; | &nbsp;
      
        {user && (
            <Link id="logout" className="nav-links" onClick={handleLogOut} to="/">
              Logout
            </Link>
          )}
          { user ?
            <h2 className="user-name">WELCOME {user.name.toUpperCase()}!</h2>
            :
            <Link className="nav-links" to="/login">Login</Link>
          }
      </div>
    </nav>
  );
}
