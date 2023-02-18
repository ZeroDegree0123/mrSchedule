import "./NavBar.css"
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const navbar = document.querySelector('.nav-bar')
  const toggle = document.querySelector('.nav-toggle')
  // const navItems = document.querySelector('.nav-list')

  // toggle.addEventListener('click', () => {
  //   if (navbar.className === '.nav-bar') {
  //     // sidebar
  //   }
  // })

  return (
    <nav className="nav-bar">{/* Effected */}
      
        <div className="nav-toggle">&#62;</div>

      {/* Effected */}
      <div className="user-info">
        <img src="https://imgur.com/XSenBva.png" alt="" />
        <h2 className="user-name">{user.name.toUpperCase()}</h2>
      </div>

      {/* Effected */}
      <div className="nav-titles">
          Navigation
      </div>


      {/* Effected */}
      <div className="nav-list">
        <Link id="logout" className="nav-item active" onClick={handleLogOut} to="/">Logout</Link>
        <Link id="logout" className="nav-item" onClick={handleLogOut} to="/">Logout</Link>
        <Link id="logout" className="nav-item" onClick={handleLogOut} to="/">Logout</Link>
        <Link id="logout" className="nav-item" onClick={handleLogOut} to="/">Logout</Link>
        {/* <Link className="nav-links" to="/login">Login</Link> */}
      </div>
      <hr />

      {/* Effected */}
      <div className="nav-titles">
          Support
      </div>


      {/* Effected */}
      <div className="nav-list"> 
        <Link id="logout" className="nav-item active" onClick={handleLogOut} to="/">Logout</Link>
        <Link id="logout" className="nav-item" onClick={handleLogOut} to="/">Logout</Link>
      </div>
    </nav>
  );
}
